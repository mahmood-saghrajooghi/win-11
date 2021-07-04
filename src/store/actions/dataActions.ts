import { toast } from 'react-toastify';
import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { toastify } from "../../Components/Toast/toastify";
import dataService from '../../Services/dataService';
import { AppState } from '../reducers';
import { ServiceError } from '../types';
import * as actionTypes from '../types/actions';
import { DeleteDataTypes, DELETE_DATA_TYPES, EditingValueTypes, SaveAddressPayload, SaveCustomerPayload, SaveDataTypes, SAVE_DATA_TYPES } from '../types/dataTypes';
import { filterSelectedRow } from './layoutActions';

export const getAllData = (config: { path: string, type: string })
  : ThunkAction<Promise<string | null | undefined>, AppState, undefined, AnyAction> => {
  return async (dispatch: ThunkDispatch<AppState, undefined, AnyAction>, getState: () => AppState) => {
    try {
      dispatch(getAllDataRequest(config.type));
      const data = await dataService.get(config.path);
      dispatch(getAllDataSuccess({ type: config.type, data: data }));
      dispatch(dynamingetAllDataSuccess(config.type));
      return null;
    } catch (e) {
      const err = e as ServiceError;
      dispatch(getAllDataFailure(config.type));
      toastify({
        type: toast.TYPE.ERROR,
        content: {
          title: err.title,
          text: err.message,
          link: {
            text: 'Error Code "' + err.originalError.response?.status + '"'
          }
        }
      })
      throw (err);
    }
  }
}

export const setData = (data: { type: string, data: any }): actionTypes.SetData => {
  return {
    type: actionTypes.SET_DATA,
    data
  }
}

export const getAllDataRequest = (type: string) => {
  return {
    type: type + "/REQUEST"
  }
}
export const getAllDataFailure = (type: string) => {
  return {
    type: type + "/FAILURE"
  }
}
export const dynamingetAllDataSuccess = (type: string) => {
  return {
    type: type + "/SUCCESS",
  }
}
export const getAllDataSuccess = (data: { type: string, data: any }) => {
  return {
    type: actionTypes.GET_DATA_SUCCESS,
    data
  }
}

export const getDataById = (payload: { id: string, type: EditingValueTypes })
  : ThunkAction<Promise<any | null>, AppState, undefined, AnyAction> => {
  return async (dispatch: ThunkDispatch<AppState, undefined, AnyAction>) => {
    try {
      dispatch(getDataByIdRequest(payload.type));
      let data = null;
      switch (payload.type) {
        case 'order':
          data = await dataService.order.getById(payload.id);
          break;
        case 'customer':
          data = await dataService.customer.getById(payload.id);
          break;
        case 'address':
          data = await dataService.address.getById(payload.id);
          break;
        case 'product':
          data = await dataService.product.getById(payload.id);
          break;
      }
      dispatch(setData({ type: payload.type, data: data }));
      dispatch(getDataByIdSuccess(payload.type));
      return null;
    } catch (e) {
      const err = e as ServiceError;
      dispatch(getDataByIdFailure(payload.type))
      toastify({
        type: toast.TYPE.ERROR,
        content: {
          title: err.title,
          text: err.message,
          link: {
            text: 'Error Code "' + err.originalError.response?.status + '"'
          }
        }
      })
      throw (err)
    }
  }
}
export const getDataByIdRequest = (type: EditingValueTypes) => {
  return {
    type: type + "/REQUEST"
  }
}
export const getDataByIdSuccess = (type: EditingValueTypes) => {
  return {
    type: type + "/SUCCESS"
  }
}
export const getDataByIdFailure = (type: EditingValueTypes) => {
  return {
    type: type + "/FAILURE"
  }
}



export const saveData = (type: SaveDataTypes, payload: {
  id: string,
  updatedValues: SaveCustomerPayload | SaveAddressPayload
})
  : ThunkAction<Promise<string | null | undefined>, AppState, undefined, AnyAction> => {
  return async (dispatch: ThunkDispatch<AppState, undefined, AnyAction>, getState: () => AppState) => {
    try {
      dispatch(saveDataRequest(type));
      let title = "";
      switch (type) {
        case SAVE_DATA_TYPES.CUSTOMER:
          await dataService.customer.post(payload.id, payload.updatedValues);
          title = 'Customer';
          break;
        case SAVE_DATA_TYPES.PRODUCT:
          await dataService.product.post(payload.id, payload.updatedValues);
          title = 'Product';
          break;
        case SAVE_DATA_TYPES.ADDRESS:
          await dataService.address.post(payload.id, payload.updatedValues);
          title = 'Address';
          break;
        case SAVE_DATA_TYPES.ORDER:
          await dataService.order.post(payload.id, payload.updatedValues);
          title = 'Address';
          break;
      }
      dispatch(saveDataSuccess(type));
      toastify({
        type: toast.TYPE.SUCCESS,
        content: {
          title: "Successfull",
          text: `${title} "#${payload.id}" Successfully Updated`
        }
      })
      return null;
    } catch (e) {
      const err = e as ServiceError;
      dispatch(saveDataFailure(type));
      toastify({
        type: toast.TYPE.ERROR,
        content: {
          title: err.title,
          text: err.message,
          link: {
            text: 'Error Code "' + err.originalError.response?.status + '"'
          }
        }
      })
      throw (err);
    }
  }
}
export const saveDataSuccess = (type: SaveDataTypes) => ({
  type: type + "/SUCCESS"
});
const saveDataRequest = (type: SaveDataTypes) => ({
  type: type + "/REQUEST"
})
export const saveDataFailure = (type: SaveDataTypes) => ({
  type: type + "/FAILURE"
})

export const deleteData = (id: string, type: DeleteDataTypes)
  : ThunkAction<Promise<string | null | undefined>, AppState, undefined, AnyAction> => {
  return async (dispatch: ThunkDispatch<AppState, undefined, AnyAction>, getState: () => AppState) => {
    try {
      dispatch(deleteDataRequest(type));
      let title = "";
      switch (type) {
        case DELETE_DATA_TYPES.CUSTOMER:
          await dataService.customer.delete(id);
          dispatch(filterSelectedRow(id, "customer_id"));
          title = 'Customer';
          break;
        case DELETE_DATA_TYPES.ADDRESS:
          await dataService.address.delete(id);
          dispatch(filterSelectedRow(id, "address_id"));
          title = 'Address';
          break;
        case DELETE_DATA_TYPES.ORDER:
          await dataService.order.delete(id);
          dispatch(filterSelectedRow(id, "order_id"));
          title = 'Order';
          break;
        case DELETE_DATA_TYPES.PRODUCT:
          await dataService.product.delete(id);
          dispatch(filterSelectedRow(id, "product_id"));
          title = 'Product';
          break;
      }
      dispatch(deleteDataSuccess(type));
      toastify({
        type: toast.TYPE.SUCCESS,
        content: {
          title: "Successfull",
          text: `${title} "#${id}" Successfully Deleted`
        },
      })
      return null;
    } catch (e) {
      const err = e as ServiceError;
      console.log(err);

      dispatch(deleteDataFailure(type));
      toastify({
        type: toast.TYPE.ERROR,
        content: {
          title: err.title,
          text: err.message,
          link: {
            text: 'Error Code "' + err.originalError.response?.status + '" : ' + err.originalError.response?.statusText
          }
        },
      })
      // throw (err);
    }
  }
}
export const deleteDataRequest = (type: DeleteDataTypes) => ({
  type: type + "/REQUEST"
})
export const deleteDataSuccess = (type: DeleteDataTypes) => ({
  type: type + "/SUCCESS"
})
export const deleteDataFailure = (type: DeleteDataTypes) => ({
  type: type + "/FAILURE"
})