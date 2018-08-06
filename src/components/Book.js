import React from 'react';

const Book = ({title, author, img, description, onDelete}) => {
    const addDefaultSrc = (e) => {
        e.target.src = 'https://vignette.wikia.nocookie.net/the-darkest-minds/images/4/47/Placeholder.png/revision/latest?cb=20160927044640'
    }
    
    return (
        <article className="article">
            <div className="image-wrapper">
                <img onError={addDefaultSrc} src={img} alt="Book poster" />
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
}

export default Book
