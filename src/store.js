import { createStore, combineReducers } from 'redux';
import booksReducer from './reducers/booksReducer';
import categoryFilterReducer from './reducers/categoryFilterReducer';

const root = combineReducers({
    //need to change the calling to the book store to be one level up, so instead of books.map, its gona be bookstore.books.map. Yei.
  bookstore: booksReducer,
  filter: categoryFilterReducer,
});
const store = createStore(root);

export default store;
