import {combineReducers} from 'redux';  
import products from './productsReducer';
import file from './fileReducer';
import error from './errorReducer';
 
const rootReducer = combineReducers({  
  products,
  file,
  error
});
 
export default rootReducer;