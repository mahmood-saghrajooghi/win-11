import { AxiosResponse } from 'axios';
import { Cart, CartItem } from '../store/types/cartTypes';
import axios from './axios';


export const removeFromCartService: (itemId: string) => Promise<{ cartInfo: { cart: Cart, items: CartItem[] } }> = (itemId) => {
  return new Promise((resolve, reject) => {
    axios.delete<string, AxiosResponse<{ response: { items: CartItem[], cart: Cart } }>>(`/cart/${itemId}`)
      .then(res => {
        resolve({
          cartInfo: {
            cart: res.data.response.cart,
            items: res.data.response.items
          }
        })
      })
      .catch(err => {
        reject(err)
      })
  })
}

export const getCartService: (cartId: string | null) => Promise<{ cart: Cart, items: CartItem[] }> = () => {
  return new Promise((resolve, reject) => {
    // change url and return data type when hooked to real api
    axios.get<string, AxiosResponse<{ response: { cart: Cart, items: CartItem[] } }>>('/cart')
      .then(res => {
        resolve(res.data.response);
      })
      .catch(err => {
        reject(err)
      })
  })
}

const cartService = {
  get: getCartService,
  delete: removeFromCartService,
}
export default cartService;