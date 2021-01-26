import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook } from '../actions/bookActions';
import Book from '../components/Book';
import CategoryComponent from '../components/CategoryComponent';
import changeFilter from '../actions/filterActions';

const BooksList = props => {
  const { books, removeBook } = props;

  const handleBookRemove = id => {
    removeBook(id);
  };

  const handleFilterChange = event => {
    changeFilter(event.target.value);
  };

  return (
    <>
      <CategoryComponent handleFilterChange={handleFilterChange} />
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
        books.map(book => (
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
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
  changeFilter: category => dispatch(changeFilter(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
