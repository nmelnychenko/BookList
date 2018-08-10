import React from 'react'
import Book from './Book'

const BookList = ({ booklist, onDelete }) => {
    const list = booklist.map((item) => {
        const {id, author, descr, title, img} = item

        return (
            <Book
                key={`${id}`}
                author={`${author}`}
                descr={`${descr}`}
                img={`${img}`}
                title={`${title}`}
                onDelete={ () => onDelete(id) }
            />
        )
    })

    return (
        <section className="articles-wrapper">
            {list}
        </section>
    )
}
    
export default BookList
