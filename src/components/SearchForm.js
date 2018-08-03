import React, {Component} from 'react';

class SearchForm extends Component {
    render () {
        const { onChange, filter } = this.props;

        return (
            <form className="form">
                <label htmlFor="search" className="label">Filter books by title</label>
                <input
                    id = "search"
                    className = "field"
                    value = { filter }
                    onChange = { onChange }
                    type = "text"
                />
            </form>
        )
    }
}

export default SearchForm;