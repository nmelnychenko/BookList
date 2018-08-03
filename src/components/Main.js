import React, { Component } from 'react';
import BookList from './BookList';
import './Main.css';

class Main extends Component {
  render() {
    const {booklist, onDelete} = this.props;

    return (
      <section className="main">
        <BookList booklist={booklist} onDelete={onDelete} />
      </section>
    );
  }
}

export default Main;