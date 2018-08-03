import React, { Component } from 'react';
import BookList from './BookList';
import './Main.css';

class Main extends Component {
  render() {
    const {booklist} = this.props;

    return (
      <section className="main">
        <BookList booklist={booklist} />
      </section>
    );
  }
}

export default Main;