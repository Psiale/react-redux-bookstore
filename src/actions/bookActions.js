import { CREATE_BOOK, REMOVE_BOOK } from '../types/bookTypes';

export const createBook = book => ({
  type: CREATE_BOOK,
  payload: book,
});

export const removeBook = id => ({
  type: REMOVE_BOOK,
  payload: id,
});
