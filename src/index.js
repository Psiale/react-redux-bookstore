import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import store from './store';
import App from './components/App';

ReactDOM.render(
  <React>
    <Provider store={store}>
      <App />
    </Provider>
  </React>,
  document.getElementById('root'),
);
