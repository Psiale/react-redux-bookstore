import React, { connect } from 'react';

const BooksList = props => {
  const { id, title, category } = props;
  return (
    <table>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
      {
        props.map((book, index) => {
          <tr id={index}>
            <th>{id}</th>
            <th>{title}</th>
            <th>{category}</th>
          </tr>;
        })
      }
    </table>
  );
};

const mapStateToProps = state => {
  return {
    books: state.books,
  }
}

export default connect(mapStateToProps, null)(BooksList);
