import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './Components/App/';
import reducer from './reducers/';
import thunk from 'redux-thunk';
import { BrowserRouter } from "react-router-dom";


const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => {
  store.getState();
})

ReactDOM.render(
  <Provider store = {store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, 
  document.querySelector('#root'));