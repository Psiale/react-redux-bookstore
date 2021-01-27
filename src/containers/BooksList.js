import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from '../components/categoryFilter';
import Book from '../components/Book';
import styles from './BooksList.module.css';

const BooksList = props => {
  const {
    books, filter, removeBook, changeFilter,
  } = props;

  const handleBookRemove = id => {
    removeBook(id);
  };

  const handleFilterChange = event => {
    changeFilter(event.target.value);
  };

  const getBooksFiltered = (arr, filter) => {
    if (filter === '') {
      return arr;
    }
    return arr.filter(book => book.category === filter);
  };

  return (
    <>
      <div className={styles.titleBar}>
        <h1 className={styles.titleText}>Bookstore CMS</h1>
        <h3 className={styles.booksTitleText}>Books</h3>
        <CategoryFilter handleFilterChange={handleFilterChange} />
      </div>
      <table>
        <thead key={books.id}>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {
          getBooksFiltered(books, filter).map(book => (
            <>
              <Book
                key={book.id}
                removeBook={handleBookRemove}
                book={{
                  id: book.id,
                  title: book.title,
                  category: book.category,
                }}
              />
            </>
          ))
        }
        </tbody>
      </table>
    </>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
  filter: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.bookstore.books,
  filter: state.filterstore.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(removeBook(book));
  },
  changeFilter: filter => {
    dispatch(changeFilter(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
