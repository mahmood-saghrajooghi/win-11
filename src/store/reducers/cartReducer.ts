import * as actionTypes from '../types/actions';
import { Cart } from '../types/cartTypes';
import { updateObject } from '../utility';

const initialState: Cart = {
  Currency: {
    currency_cd: "",
    symbol: "",
    text_ar: "",
    text_en: "",
  },
  address_id: null,
  country_cd: "",
  currency_cd: "",
  subtotal: 0,
  order_id: "",
  order_status_id: 0,
  tax: 0,
  shipping: 0,
  discount: 0,
  final_amount: 0,
  user_id: null,
  items: [],
  cart_id: null
}

const addToCartStart = (state: Cart, action: actionTypes.CartActionTypes) => {
  console.log('starting add tocart');
  return updateObject(state, { addToCartLoadingState: 'LOADING' });
}
const addToCartFail = (state: Cart, action: actionTypes.CartActionTypes) => {
  return updateObject(state, { addToCartLoadingState: 'SUCCESSS' });
}
const addToCartSuccess = (state: Cart, action: actionTypes.AddToCartSuccess) => {
  return updateObject(state, {
    ...action.cartInfo.cart,
    items: action.cartInfo.items,
    cart_id: action.cartId
  });
}
const getCartStart = (state: Cart, action: actionTypes.CartActionTypes) => {
  return state;
}
const getCartFail = (state: Cart, action: actionTypes.CartActionTypes) => {
  return state;
}
const getCartSuccess = (state: Cart, action: actionTypes.FetchCartSuccess) => {
  return updateObject(state, { ...action.cartInfo.cart, items: action.cartInfo.items });
}
const removeFromCartSuccess = (state: Cart, action: actionTypes.RemoveFromCartSuccess) => {
  return updateObject(state, { ...action.cartInfo.cart, items: action.cartInfo.items })
}
const reducer = (
  state: Cart = initialState,
  action: actionTypes.CartActionTypes
): Cart => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART_REQUEST: return addToCartStart(state, action);
    case actionTypes.ADD_TO_CART_FAILURE: return addToCartFail(state, action);
    case actionTypes.ADD_TO_CART_SUCCESS: return addToCartSuccess(state, action);
    case actionTypes.FETCH_CART_REQUEST: return getCartStart(state, action);
    case actionTypes.FETCH_CART_FAILURE: return getCartFail(state, action);
    case actionTypes.FETCH_CART_SUCCESS: return getCartSuccess(state, action);
    case actionTypes.REMOVE_FROM_CART_SUCCESS: return removeFromCartSuccess(state, action)
    default:
      return state;
  }
}

export default reducer;