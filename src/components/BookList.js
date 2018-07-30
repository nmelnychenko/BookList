import React from 'react';
import Book from './Book';

const BookList = (props) => {
    const array = [1, 2, 3]
    const list = array.map(() => {
        return <Book />
    })

    return (
        <section>
            {list}
        </section>
    )
}
    
export default BookList
