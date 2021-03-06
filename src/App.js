import React, { Component } from 'react';
import SearchForm from './components/SearchForm';
import BookEditor from './components/BookEditor';
import BookList from './components/BookList';

import books from './assets/books';
import v4 from 'uuid/v4';
import './App.css';

class App extends Component {
  state = {
    bookList: books,
    filter: ''
  }

  filterList = (list, value) => {
    return list.filter(item => item.title.toLowerCase().includes(value.toLowerCase()))
  }

  deleteItem = (id) => {
    this.setState(prevState => ({
      bookList: prevState.bookList.filter(item => item.id !== id)
    }))
  };

  changeFilter = (e) => {
    this.setState({
      filter: e.target.value,
    })      
  };

  addBook = (data) => {
    const newItem = {
      id: v4(),
      ...data
    }
    
    this.setState(prevState => ({
      bookList: [
        newItem,
        ...prevState.bookList
      ],
    }))
  }

  render() {
    const { bookList, filter } = this.state;
    const actualList = this.filterList(bookList, filter);

    return (
      <div className="app">
        <aside className="sidebar">
          <SearchForm value = { filter } onChange = { this.changeFilter } />
          <BookEditor onSubmit = { this.addBook } />
        </aside>
        <section className="main">
          <BookList booklist={actualList} onDelete={this.deleteItem} />
        </section>
      </div>
    );
  }
}

export default App;
