import { initialState } from '../index';
import { CREATE_BOOK, REMOVE_BOOK } from '../types/bookTypes';

const booksReducer = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_BOOK: return {
      ...state,
      books: state.concat(action.payload)
    }
    case REMOVE_BOOK:
      return state.filter(book => book.id === id)
  }
};
export default booksReducer;
