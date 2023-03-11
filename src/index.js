import React from 'react';  
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import App from './components/App';  
 import history from './history';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import {loadProducts} from './actions/productActions';

 
const store = configureStore();
store.dispatch(loadProducts());
 
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);