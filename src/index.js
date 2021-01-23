import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import store from 'store';
import { getRandomInt } from 'utilities';
import App from './App';
import book from './classes/book';

const initialState = {
  books: [
    book(getRandomInt(1, 999999), 'first', 'horror'),
    book(getRandomInt(1, 999999), 'second', 'sci-fi'),
    book(getRandomInt(1, 999999), 'third', 'comedy'),
  ],
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

export { initialState };
