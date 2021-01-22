import React, { connect } from 'react';
import Book from '../components/Book';

const BooksList = props => {
  const books = props;
  return (
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book => (
          <Book
            key={book.idBook}
            book={{
              idBook: book.idBook,
              title: book.title,
              category: book.category,
            }}
          />
        ))}
      </tbody>
    </table>
  );
};

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps, null)(BooksList);
