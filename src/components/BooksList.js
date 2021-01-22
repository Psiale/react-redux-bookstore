const BooksList = ({ books }) => (
  <table>
    <tr>
      <th>id</th>
      <th>title</th>
      <th>category</th>
    </tr>
    {books.map((book, index) => {
      <tr id={index}>
        <th>{book.id}</th>
        <th>{book.title}</th>
        <th>{book.category}</th>
      </tr>;
    })}
  </table>
);

export default BooksList;
