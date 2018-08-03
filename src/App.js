import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

import books from './assets/books';
import './App.css';

class App extends Component {
  state = {
    bookList: books,
    filterValue: ''
  }

  handleFilter = (items, value) => {
    items = this.state.bookList

    return (
      items.filter = (item) => {
        console.log(item)
        // return item.title.includes(value)
        return item
      }
    )
  }

  render() {
    const {bookList, filterValue} = this.state;

    return (
      <div className="app">
        <Sidebar filterFunc={this.handleFilter(bookList, filterValue)} />
        <Main booklist={bookList} />
      </div>
    );
  }
}

export default App;
