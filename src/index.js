import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "mobx-react"
import { observable, reaction } from "mobx"
import {
    onSnapshot,
    onAction,
    onPatch,
    applySnapshot,
    applyAction,
    applyPatch,
    getSnapshot
} from "mobx-state-tree"

import createRouter from "./utils/router"
import App from "./components/App"
import "./index.css"

import { ShopStore } from "./stores/ShopStore"

const fetcher = url => window.fetch(url).then(response => response.json())
//创建一个树 使用默认值
console.log('准备创建一棵树');
const shop = ShopStore.create(
    {},
    {
        fetch: fetcher,
        alert: m => console.log(m) // Noop for demo: window.alert(m)
    }
)
console.log('树创建完成');
console.log(shop);
const history = {
    snapshots: observable.array([], { deep: false }),
    actions: observable.array([], { deep: false }),
    patches: observable.array([], { deep: false })
}


/**
 * Rendering
 */
ReactDOM.render(
    <Provider shop={shop} history={history}>
        <App />
    </Provider>,
    document.getElementById("root")
)

/**
 * Routing
 */

reaction(
    () => shop.view.currentUrl,
    path => {
        if (window.location.pathname !== path) window.history.pushState(null, null, path)
    }
)

const router = createRouter({
    "/book/:bookId": ({ bookId }) => shop.view.openBookPageById(bookId),
    "/cart": shop.view.openCartPage,
    "/": shop.view.openBooksPage
})

window.onpopstate = function historyChange(ev) {
    if (ev.type === "popstate") router(window.location.pathname)
}
console.log('准备跳转');
router(window.location.pathname)

// ---------------

window.shop = shop // for playing around with the console

/**
 * Poor man's effort of "DevTools" to demonstrate the api:
 */

let recording = true // supress recording history when replaying

onSnapshot(
    shop,
    s =>
        recording &&
        history.snapshots.unshift({
            data: s,
            replay() {
                recording = false
                applySnapshot(shop, this.data)
                recording = true
            }
        })
)
//更改数据模型 不仅会产生一个新的快照 还是导致一个改变的描述产生
/*
* export interface IJsonPatch {
    op: "replace" | "add" | "remove"
    path: string //树的路径
    value?: any
}
* */
//将补丁监听器添加到模型 第一个参数是要监听的模型 第二是个回调函数 shop改变或者他的依赖改变的时候 都会触发
onPatch(
    shop,
    s =>
        recording &&
        history.patches.unshift({
            data: s,
            replay() {
                recording = false
                applyPatch(shop, this.data)
                recording = true
            }
        })
)
onAction(
    shop,
    s =>
        recording &&
        history.actions.unshift({
            data: s,
            replay() {
                recording = false
                applyAction(shop, this.data)
                recording = true
            }
        })
)

// add initial snapshot
history.snapshots.push({
    data: getSnapshot(shop),
    replay() {
        // TODO: DRY
        recording = false
        applySnapshot(shop, this.data)
        recording = true
    }
})
//add'
//edit


