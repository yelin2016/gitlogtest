import { types, getEnv } from "mobx-state-tree"
import { BookStore } from "./BookStore"
import { CartStore } from "./CartStore"
import { ViewStore } from "./ViewStore"

export const ShopStore = types
    .model("ShopStore", {
        //optional('类型'，默认值)
        bookStore: types.optional(BookStore, {
            books: {}
        }),
        cart: types.optional(CartStore, {
            entries: []
        }),
        view: types.optional(ViewStore, {})
    })
    .views(self => ({
        get fetch() {
            console.log('shopStore fetch');

            console.log(getEnv(self));//getEnv获取初始值的option
            return getEnv(self).fetch
        },
        get alert() {
            console.log('shopStore alert')
            return getEnv(self).alert
        },
        get isLoading() {
            console.log('shopStore isLoading');
            return self.bookStore.isLoading
        },
        get books() {
            return self.bookStore.books
        },
        get sortedAvailableBooks() {
            return self.bookStore.sortedAvailableBooks
        }
    }))
    .actions(self => {
        function afterCreate() {
            console.log('钩子函数，shopStore afterCreate');
            self.bookStore.loadBooks()
        }
        console.log('shopStore的 action')
        return {
            afterCreate:afterCreate
        }

        /*
        * afterAttach 相对于afterCreate 更加安全推断父节点的假设
        * beforeDetach  从父元素上移除前调用
        * beforeDestroy 销毁前调用
        * */
    })
