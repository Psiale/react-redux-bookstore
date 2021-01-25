const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const BooksForm = () => (
  <>
    <form action="">
      <label htmlFor="bookTitle">
        Title
        <input name="bookTitle" type="text" />
      </label>
      <label htmlFor="bookCategories">
        Categories
        <select name="bookCategories" id="books">
          {
            categories.map(category => <option key={category}>{category}</option>)
          }
        </select>
      </label>
      <button type="submit"> submit </button>
    </form>
  </>
);
export default BooksForm;
