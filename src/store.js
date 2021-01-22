import { createStore } from 'redux';
import booksReducer from './reducers/books';

const store = createStore({ booksReducer });

export default store;
