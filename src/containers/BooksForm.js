import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';
import getRandomInt from '../utilities';

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
    <>
      <form action="">
        <label htmlFor="bookTitle">
          Title
          <input onChange={handleTitleChange} name="bookTitle" id="bookTitleInput" type="text" />
        </label>
        <label htmlFor="bookCategories">
          Categories
          <select onChange={handleCategoryChange} name="bookCategories" id="books">
            {
            categories.map(category => <option key={category}>{category}</option>)
          }
          </select>
        </label>
        <button type="submit" onClick={handleSubmit}> submit </button>
      </form>
    </>
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book)),
});

export default connect(null, mapDispatchToProps)(BooksForm);
