import React from "react"
import { observer, inject } from "mobx-react"
import logo from "../logo.svg"
import "./App.css"

import Books from "./Books"
import BookDetails from "./BookDetails"
import Cart from "./Cart"
import DevTools from "./DevTools"

const App = inject("shop")(
    observer(({ shop }) => {
       return <div>
            <div className="App">
                <AppMenu>
                    <AppMenuItem onClick={() => shop.view.openBooksPage()}>
                        所有图书
                    </AppMenuItem>
                    <AppMenuItem onClick={() => shop.view.openCartPage()}>购物车</AppMenuItem>
                    <AppMenuItem onClick={shop.view.openGoodPage}>个人商品列表</AppMenuItem>
                </AppMenu>
                {shop.isLoading ? <h1>加载中...</h1> : renderPage(shop.view)}
            </div>

            <DevTools />
        </div>}
    )
)

function renderPage(viewStore) {

    switch (viewStore.page) {
        case "books":
            return <Books />
        case "book":
            const book = viewStore.selectedBook
            if (book) return <BookDetails book={book} />
            else return <h1>Book ${viewStore.selectedBookId} not found!</h1>
        case "cart":
            return <Cart />
        case 'goods':
            return <div>hello goods</div>
        default:
            return "Sry, not found"
    }
}

const AppHeader = () => (
    <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to the React MobX Book shop!</h2>
    </div>
)

const AppMenu = ({ children }) => <ul className="App-menu">{children}</ul>

const AppMenuItem = ({ onClick, children }) => (
    <li>
        <a onClick={onClick}>{children}</a>
    </li>
)

export default App
