import React, { Component } from 'react';
import SearchBar from './SearchBar';
import BookEditor from './BookEditor';

class Sidebar extends Component {
  render() {
    return (
      <aside className="Sidebar">
        <SearchBar />
        <BookEditor />
      </aside>
    );
  }
}

export default Sidebar;