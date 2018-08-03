import React, { Component } from 'react';
import SearchForm from './SearchForm';
import BookEditor from './BookEditor';
import PropTypes from 'prop-types';

import './Sidebar.css';

class Sidebar extends Component {
  render() {
    const { onChange, value, newBook, addBook } = this.props;

    return (
      <aside className="sidebar">
        <SearchForm onChange = { onChange } value = { value } />
        <BookEditor newBook = { newBook } addBook = { addBook } />
      </aside>
    );
  }
}

export default Sidebar;