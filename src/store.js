import { createStore } from 'redux';
import booksReducer from './reducers/booksReducer';

const store = createStore(booksReducer);

export default store;
