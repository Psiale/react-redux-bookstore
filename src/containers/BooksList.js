import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook } from '../actions/bookActions';
import Book from '../components/Book';

const BooksList = props => {
  const { books, removeBook } = props;

  const handleBookRemove = id => {
    removeBook(id);
  };

  return (
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
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
