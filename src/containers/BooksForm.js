import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';
import getRandomInt from '../utilities';
import styles from './BooksForm.module.css';

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const BooksForm = ({ createBook }) => {
  const [bookTitle, setBookTitle] = useState('');
  const [bookCategory, setBookCategory] = useState('Action');

  const handleTitleChange = event => {
    setBookTitle(event.target.value);
  };

  const handleCategoryChange = event => {
    setBookCategory(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    createBook({
      id: getRandomInt(1, 999999),
      title: bookTitle,
      category: bookCategory,
    });
    setBookCategory('Action');
    setBookTitle('');
    document.querySelector('#bookTitleInput').value = '';
  };

  return (
    <form action="" className={styles.formContainer}>
      <div className={styles.formTitleDiv}>
        <h3 className={styles.formTitle}>Add New Book</h3>
      </div>
      <div className={styles.formInputsDiv}>
        <input onChange={handleTitleChange} placeholder="Book Title" className={styles.formTitleInput} name="bookTitle" id="bookTitleInput" type="text" />
        <select onChange={handleCategoryChange} className={styles.formCategoryInput} name="bookCategories" id="books">
          {
          categories.map(category => <option key={category}>{category}</option>)
        }
        </select>
        <button type="submit" onClick={handleSubmit} className={styles.formSubmit}>Submit</button>
      </div>
    </form>
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book)),
});

export default connect(null, mapDispatchToProps)(BooksForm);
