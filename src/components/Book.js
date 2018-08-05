import React from 'react';

const Book = ({title, author, img, description, onDelete}) => (
    <article className="article">
        <div className="image-wrapper">
            <img src={img} alt="Book poster" />
        </div>
        <div className="article__text">
            <h2 className="article__title">{title}</h2>
            <p className="article__author">
                Author: {author}
            </p>
            <p className="article__desc">{description}</p>
        </div>
        <button className="delete" onClick={onDelete}>Delete</button>
    </article>
)

export default Book
