import { AxiosError, AxiosResponse } from 'axios';
import { ServiceError } from '../store/types';
import { SaveAddressPayload, SaveCustomerPayload } from '../store/types/dataTypes';
import axios from './axios';

const getAllData = (path: string): Promise<any> => {
  return new Promise((resolve, reject: (props: ServiceError) => void) => {
    axios.get<string, AxiosResponse<{ response: any }>>(path)
      .then(res => {
        resolve(res.data.response);
      })
      .catch((err: AxiosError) => {
        reject({
          originalError: err,
          message: `Cannot get "/${path}"`,
          title: "Failed"
        });
      })
  })
}
const getDataById = (path: string, id: string): Promise<any> => {
  return new Promise((resolve, reject: (props: ServiceError) => void) => {
    axios.get<string, AxiosResponse<{ response: any }>>(`/${path}/${id}`)
      .then(res => {
        resolve(res.data.response);
      })
      .catch((err: AxiosError) => {
        reject({
          originalError: err,
          message: `Cannot get "/${path}/${id}"`,
          title: "Failed"
        });
      })
  })
}

const postData = (path: string, id: string, updatedValues: SaveCustomerPayload | SaveAddressPayload): Promise<any> => {
  return new Promise((resolve, reject: (props: ServiceError) => void) => {
    axios.post<string, AxiosResponse<{ response: any }>>(`/${path}/${id}`, updatedValues)
      .then(res => {
        resolve(res.data.response);
      })
      .catch((err: AxiosError) => {
        reject({
          originalError: err,
          message: `Cannot post "/${path}/${id}"`,
          title: "Failed"
        });
      })
  })
}
const deleteById = (path: string, id: string): Promise<any> => {
  return new Promise((resolve, reject: (props: ServiceError) => void) => {
    axios.delete<string, AxiosResponse<{ response: any }>>(`/${path}/${id}`)
      .then(res => {
        resolve(res.data.response);
      })
      .catch((err: AxiosError) => {
        reject({
          originalError: err,
          message: `Cannot delete "/${path}/${id}"`,
          title: "Failed"
        });
      })
  })
}

const dataService = {
  get: getAllData,
  customer: {
    post: (id: string, payload: any) => postData("customer", id, payload),
    delete: (id: string) => deleteById("customer", id),
    getById: (customerId: string) => getDataById("customer", customerId)
  },
  order: {
    getAll: () => getAllData('/all-orders'),
    delete: (id: string) => deleteById("order", id),
    getById: (orderId: string) => getDataById("order", orderId),
    post: (id: string, payload: any) => postData("order", id, payload),
  },
  address: {
    post: (id: string, payload: any) => postData("address", id, payload),
    delete: (id: string) => deleteById("address", id),
    getById: (addressId: string) => getDataById("address", addressId)
  },
  product: {
    getById: (id: string) => getDataById("product", id),
    post: (id: string, payload: any) => postData("product", id, payload),
    delete: (id: string) => deleteById("product", id),
  }
}
export default dataService;