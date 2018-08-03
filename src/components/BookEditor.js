import React, {Component} from 'react';

class BookEditor extends Component {
    render () {
        return (
            <form className="form">
                <label htmlFor="title" className="label">Title</label>
                <input type="text" id="title" className="field"/>
                <label htmlFor="image" className="label">Image link</label>
                <input type="text" id="image" className="field"/>
                <label htmlFor="author" className="label">Author</label>
                <input type="text" id="author" className="field"/>
                <label htmlFor="description" className="label">Description</label>
                <textarea id="description" className="textarea"/>
                <button type="submit" className="submit">Add book</button>
            </form>
        )
    }
}

export default BookEditor;