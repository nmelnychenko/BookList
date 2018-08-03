import React, { Component } from 'react';
import SearchForm from './SearchForm';
import BookEditor from './BookEditor';
import PropTypes from 'prop-types';

import './Sidebar.css';

class Sidebar extends Component {
  static propTypes = {
    filterFunc: PropTypes.func.isRequired
  };

  render() {
    const {filterFunc} = this.props;
    
    return (
      <aside className="sidebar">
        <SearchForm filterFunc={filterFunc} />
        <BookEditor />
      </aside>
    );
  }
}

export default Sidebar;