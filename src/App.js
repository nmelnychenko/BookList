import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

import books from './assets/books';
import './App.css';

class App extends Component {
  state = {
    booklist: books,
    filterValue: ''
  }

  handleFilter = (items, value) => {
    items = this.state.booklist

    return (
      items.filter = (item) => {
        console.log(item)
        // return item.title.includes(value)
        return item
      }
    )
  }

  render() {
    const {booklist, filterValue} = this.state;

    return (
      <div className="app">
        <Sidebar filterFunc={this.handleFilter(booklist, filterValue)} />
        <Main booklist={this.state.booklist} />
      </div>
    );
  }
}

export default App;
