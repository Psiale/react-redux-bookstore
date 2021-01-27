import book from '../classes/book';
import { CREATE_BOOK, REMOVE_BOOK } from '../types/bookTypes';
import getRandomInt from '../utilities';

const initialState = {
  books: [
    book(getRandomInt(1, 999999), 'First', 'Horror'),
    book(getRandomInt(1, 999999), 'Second', 'Sci-Fi'),
    book(getRandomInt(1, 999999), 'Third', 'Comedy'),
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
