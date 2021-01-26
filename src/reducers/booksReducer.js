import book from '../classes/book';
import { CREATE_BOOK, REMOVE_BOOK } from '../types/bookTypes';
import getRandomInt from '../utilities';

const initialState = {
  books: [
    book(getRandomInt(1, 999999), 'first', 'horror'),
    book(getRandomInt(1, 999999), 'second', 'sci-fi'),
    book(getRandomInt(1, 999999), 'third', 'comedy'),
  ],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK: return {
      ...state,
      books: state.books.concat(action.payload),
    };
    case REMOVE_BOOK: return {
      ...state,
      books: state.books.filter(book => book.id === action.payload.id),
    };
    default: return {
      ...state,
    };
  }
};

export default booksReducer;
