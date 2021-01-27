import React from 'react';
import PropTypes from 'prop-types';
import styles from './CategoryFilter.module.css';

const categories = [
  'All',
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const CategoryFilter = ({ handleFilterChange }) => (
  <div>
    <select
      onChange={handleFilterChange}
      className={styles.categoriesSelector}
      name="bookCategories"
      id="booksCategories"
    >
      {categories.map(category => (
        <option key={category}>{category}</option>
      ))}
    </select>
  </div>
);

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
