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
          <option value={categories[0]}>{categories[0]}</option>
          <option value={categories[1]}>{categories[1]}</option>
          <option value={categories[2]}>{categories[2]}</option>
          <option value={categories[3]}>{categories[3]}</option>
          <option value={categories[4]}>{categories[4]}</option>
          <option value={categories[5]}>{categories[5]}</option>
          <option value={categories[6]}>{categories[6]}</option>
        </select>
      </label>
      <button type="submit"> submit </button>
    </form>
  </>
);
export default BooksForm;
