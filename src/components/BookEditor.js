import React, {Component} from 'react';

class BookEditor extends Component {
    state = {
        title: '',
        img: '',
        author: '',
        descr: '',
    };

    handleChange = (e) => {
        const name = e.target.name;

        this.setState({
            [name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const newBook = this.state;
        const isEmptyValue = Object.values(newBook).some(value => value.trim() === '');
        const {id, img, title, author, descr} = newBook;

        if (isEmptyValue) {
            alert("Some required field is empty");
            return;
        }

        this.props.onSubmit({id, img, title, author, descr});

        this.setState({
            title: '',
            img: '',
            author: '',
            descr: '',
        });
    }
    
    render () {
        const { title, img, author, descr } = this.state;

        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <label className="label" >
                    Title
                    <input
                        type="text"
                        name="title"
                        className="field"
                        value={title}
                        onChange={this.handleChange}
                    />
                </label>
                <label className="label">
                    Image link
                    <input
                        type="text"
                        name="img"
                        className="field"
                        value={img}
                        onChange={this.handleChange}
                    />
                </label>
                <label className="label">
                    Author
                    <input
                        type="text"
                        name="author"
                        className="field"
                        value={author}
                        onChange={this.handleChange}
                    />
                </label>
                <label className="label">
                    Description
                    <textarea
                        name="descr"
                        className="textarea"
                        value={descr}
                        onChange={this.handleChange}
                    />
                </label>
                <button type="submit" className="submit">Add book</button>
            </form>
        )
    }
}

export default BookEditor;