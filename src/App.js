import React, { Component } from 'react';
import SearchForm from './components/SearchForm';
import BookEditor from './components/BookEditor';
import Main from './components/Main';

import books from './assets/books';
import v4 from 'uuid/v4';
import './App.css';
import './components/Sidebar.css';

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

  addBook = (e) => {
    e.preventDefault();
    const newItem = {
      id: v4(),
      title: e.target.title.value,
      image: e.target.image.value,
      author: e.target.author.value,
      descr: e.target.description.value
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
        <Main booklist = { actualList } onDelete = { this.deleteItem } />
      </div>
    );
  }
}

export default App;
