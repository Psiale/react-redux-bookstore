import { initialState } from '../index';
import { CREATE_BOOK, REMOVE_BOOK } from '../types/bookTypes';

const booksReducer = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_BOOK: return {
      ...state,
      books: state.concat(action.payload),
    };
    case REMOVE_BOOK: return {
      ...state,
      books: state.filter(book => book.id === action.payload.id),
    };
    default: return {
      ...state,
    };
  }
};
export default booksReducer;
