import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {
  attemptLogin,
  attemptSessionLogin,
  logout,
  setProductsThunk,
  setUsersThunk,
  setOrdersThunk,
  setOrderProductsThunk,
  setOrderHistoryThunk,
  addOrderProductThunk,
  addProductThunk,
  updateUserThunk,
  updateProductThunk,
  updateOrderProductThunk,
  deleteOrderProductsThunk,
  deleteProductThunk,
  deleteUserThunk,
  deleteOrderThunk

} from './thunks';

import { reducer } from './reducer';
import { setProductsAction, setUsersAction, setOrderHistoryAction } from './actions'


//////////////////////////////////////////////////////////////////////////
////////////////////////  REDUX - CREATE STORE  ///////////////////////////
///////////////////////////////////////////////////////////////////////////

//REDUX STORE WITH MIDDLEWARE
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
export { setProductsAction, setUsersAction, setOrderHistoryAction };
export {
  attemptLogin,
  attemptSessionLogin,
  logout,
  setProductsThunk,
  setOrdersThunk,
  setUsersThunk,
  setOrderHistoryThunk,
  setOrderProductsThunk,
  addProductThunk,
  addOrderProductThunk,
  updateUserThunk,
  updateProductThunk,
  updateOrderProductThunk,
  deleteOrderProductsThunk,
  deleteOrderThunk,
  deleteUserThunk,
  deleteProductThunk
};
