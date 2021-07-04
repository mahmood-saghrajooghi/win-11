import axios, { AxiosInstance } from 'axios';
const instance: AxiosInstance = axios.create({
  baseURL: 'https://api.storylia.com/'
});



export default instance;