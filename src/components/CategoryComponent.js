import React from 'react';
import PropTypes from 'prop-types';

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const CategoryComponent = ({ handleFilterChange }) => (
  <>
    <select
      onChange={handleFilterChange}
      name="bookCategories"
      id="booksCategories"
    >
      {categories.map(category => (
        <option key={category}>{category}</option>
      ))}
    </select>
  </>
);

CategoryComponent.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryComponent;
