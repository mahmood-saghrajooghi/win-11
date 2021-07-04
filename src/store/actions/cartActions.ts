import { Dispatch } from 'redux';
import cartService from '../../Services/cartService';
import * as actionTypes from '../types/actions';
import { Cart, CartItem } from '../types/cartTypes';

export const addToCartRequest = (productId: string, customizations: GeneratedBookJson): actionTypes.AddToCartRequest => {
  return {
    type: actionTypes.ADD_TO_CART_REQUEST,
    productId: productId,
    customizations: customizations
  }
}

export const addToCartFailure = (): actionTypes.AddToCartFailure => {
  return {
    type: actionTypes.ADD_TO_CART_FAILURE
  }
}

export const addToCartSuccess = (cartInfo: { cart: Cart, items: CartItem[] }, cartId: string): actionTypes.AddToCartSuccess => {
  return {
    type: actionTypes.ADD_TO_CART_SUCCESS,
    cartInfo,
    cartId
  }
}

export const addToCartReset = (): actionTypes.AddToCartReset => {
  return {
    type: actionTypes.ADD_TO_CART_RESET
  }
}

export const removeFromCart = (id: string) => {
  return (dispatch: Dispatch) => {
    dispatch(removeFromCartRequest())
    cartService.delete(id)
      .then(res => {
        dispatch(removeFromCartSuccess(res.cartInfo, res.cartInfo.cart.order_id))
      })
      .catch(err => {
        dispatch(removeFromCartFailure())
      })
  }
}

export const removeFromCartRequest = (): actionTypes.RemoveFromCartRequest => {
  return {
    type: actionTypes.REMOVE_FROM_CART_REQUEST
  }
}

export const removeFromCartFailure = (): actionTypes.RemoveFromCartFailure => {
  return {
    type: actionTypes.REMOVE_FROM_CART_FAILURE
  }
}

export const removeFromCartSuccess = (cartInfo: { cart: Cart, items: CartItem[] }, cartId: string): actionTypes.RemoveFromCartSuccess => {
  return {
    type: actionTypes.REMOVE_FROM_CART_SUCCESS,
    cartInfo,
    cartId
  }
}

export const getUserCart = () => {
  return async (dispatch: Dispatch) => {
    const cartId = localStorage.getItem('cart-id');
    dispatch(getCartRequest())
    cartService.get(cartId)
      .then(cartInfo => {
        dispatch(getCartSuccess(cartInfo));
      })
      .catch(err => {
        console.log(err);
        dispatch(getCartFailure());
      })
  }
}

export const getCartRequest = (): actionTypes.FetchCartRequest => {
  return {
    type: actionTypes.FETCH_CART_REQUEST
  }
}
export const getCartFailure = (): actionTypes.FetchCartFailure => {
  return {
    type: actionTypes.FETCH_CART_FAILURE
  }
}
export const getCartSuccess = (cartInfo: { cart: Cart, items: CartItem[] }): actionTypes.FetchCartSuccess => {
  return {
    type: actionTypes.FETCH_CART_SUCCESS,
    cartInfo: cartInfo
  }
}
export const getCartReset = (): actionTypes.FetchCartReset => {
  return {
    type: actionTypes.FETCH_CART_RESET
  }
}