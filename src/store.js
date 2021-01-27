import { createStore, combineReducers } from 'redux';
import booksReducer from './reducers/booksReducer';
import categoryFilterReducer from './reducers/categoryFilterReducer';

const root = combineReducers({
  bookstore: booksReducer,
  filterstore: categoryFilterReducer,
});
const store = createStore(root);

export default store;
