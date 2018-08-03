import React from 'react';
import Book from './Book';

const BookList = (booklist) => {
    const list = booklist.map((item) => {
        return (
            <Book
                key={`${item.id}`}
                author={`${item.author}`}
                description={`${item.descr}`}
                img={`${item.img}`}
                title={`${item.title}`}
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
