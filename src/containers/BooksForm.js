import React, { useState } from 'react';

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const BooksForm = () => {
  const [bookTitle, setBookTitle] = useState('');
  const [bookCategory, setBookCategory] = useState('');

  const handleTitleChange = event => {
    setBookTitle(event.target.value);
  };

  const handleCategoryChange = event => {
    setBookCategory(event.target.value);
  };

  const handleSubmit = (state) => {
    //save to redux state
    return {
      ...state,
      title: '',
      category: ''
    }
  }

  return (
    <>
      <form action="">
        <label htmlFor="bookTitle">
          Title
          <input onChange={() => handleTitleChange} name="bookTitle" type="text" />
        </label>
        <label htmlFor="bookCategories">
          Categories
          <select name="bookCategories" id="books">
            {
            categories.map(category => <option onChange={() => handleCategoryChange} key={category}>{category}</option>)
          }
          </select>
        </label>
        <button type="submit"> submit </button>
      </form>
    </>
  )
};

// HANDLE SUBMIT FUNCTION SHOULD BUNDLE THE NEW BOOK TITLE AND CATEGORY STATES
// AND FIRE OFF MAP TO DISPATCH

export default BooksForm;
