import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook } from '../actions/bookActions';
import Book from '../components/Book';
import CategoryComponent from '../components/CategoryComponent';
import changeFilter from '../actions/filterActions';

const BooksList = props => {
  const { books, filter, removeBook } = props;

  const handleBookRemove = id => {
    removeBook(id);
  };

  const handleFilterChange = event => {
    changeFilter(event.target.value);
  };

  const getBooksFiltered = (arr, filter) => {
    if (filter === 'All') {
      return arr;
    }
    return arr.filter(book => book.category === filter);
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
};

const mapStateToProps = state => ({
  books: state.bookstore.books,
  filter: state.filterstore.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
  changeFilter: category => dispatch(changeFilter(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
