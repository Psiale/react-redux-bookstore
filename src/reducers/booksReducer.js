import book from '../classes/book';
import { CREATE_BOOK, REMOVE_BOOK } from '../types/bookTypes';
import getRandomInt from '../utilities';

const authors = [
  'Kimyonce', 'Buff McHugeLarge', 'Dr Kenneth Noisewater',
];
const initialState = {
  books: [
    book(getRandomInt(1, 999999), 'First', 'Horror', authors[0]),
    book(getRandomInt(1, 999999), 'Second', 'Sci-Fi', authors[1]),
    book(getRandomInt(1, 999999), 'Third', 'Comedy', authors[2]),
  ],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK: return {
      ...state,
      books: state.books.concat(action.payload),
    };
    case REMOVE_BOOK: return {
      books: state.books.filter(book => book.id !== action.payload),
    };
    default: return {
      ...state,
    };
  }
};

export default booksReducer;
