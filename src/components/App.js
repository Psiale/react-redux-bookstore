import React from 'react';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import styles from './App.module.css';

const App = () => (
  <div className={styles.appContainer}>
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
