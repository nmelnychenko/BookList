import React, {Component} from 'react';

class SearchForm extends Component {
    state = {
        value: '',
    };

    handleChange = e => {
        this.setState({ value: e.target.value });
    };

    render () {
        const {filterFunc} = this.props;

        return (
            <form className="form">
                <label htmlFor="search" className="label">Filter books by title</label>
                <input
                    id="search"
                    className="field"
                    value={this.state.value}
                    onChange={filterFunc(this.state.value)}
                />
            </form>
        )
    }
}

export default SearchForm;