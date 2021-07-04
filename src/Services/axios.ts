import axios from 'axios';

const instance = axios.create({
  headers:{
    'x-cart-id': localStorage.getItem('cart-id')
  }
  // baseURL: 'https://localhost:3005'
})

export default instance;