import React from "react"
import { observer, inject } from "mobx-react"

const Books = inject("shop")(
    observer(({ shop }) => {

        console.log(shop);
        //shop.bookStore.books = [];
        return(
        <section className="Page-books">
            <h1>所有图书</h1>
            <ol>
                {shop.sortedAvailableBooks.map(book => <BookEntry key={book.id} book={book} />)}
            </ol>
        </section>
    )})
)

const BookEntry = inject("shop")(
    observer((props) => {
        var {shop,book} = props;
        return (
        <li>
            <a
                href={`/book/${book.id}`}
                onClick={e => {
                    e.preventDefault()
                    shop.view.openBookPage(book)
                    return false
                }}
            >
                {book.name}
            </a>
        </li>
    )})
)

export default Books
