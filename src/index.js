import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import { configureStore } from './store';

const store = configureStore();
console.log('store', store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
