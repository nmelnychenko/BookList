import React, { Component } from 'react';
import BookList from './BookList';

class Main extends Component {
  render() {
    return (
      <section className="Main">
        <BookList />
      </section>
    );
  }
}

export default Main;