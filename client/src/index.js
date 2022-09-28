import 'materialize-css/dist/css/materialize.min.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({reducer: reducers,
middleware: [thunk]});

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
