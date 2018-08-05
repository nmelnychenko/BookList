import React, {Component} from 'react';

class BookEditor extends Component {
    render () {
        const {onSubmit} = this.props;

        return (
            <form className="form" onSubmit={onSubmit}>
                <label htmlFor="title" className="label" requried="true" >Title</label>
                <input type="text" id="title" className="field" />
                <label htmlFor="image" className="label">Image link</label>
                <input type="text" id="image" className="field" />
                <label htmlFor="author" className="label" >Author</label>
                <input type="text" id="author" className="field" requried="true" />
                <label htmlFor="description" className="label">Description</label>
                <textarea id="description" className="textarea" />
                <button type="submit" className="submit">Add book</button>
            </form>
        )
    }
}

export default BookEditor;