import * as actionTypes from '../types/actions';
import { Data } from '../types/dataTypes';
import { updateObject } from '../utility';

const initialState: Data = {
  orders: [],
  products: [],
  address: [],
  customers: [],
  editingValue: {}
}
const getAllDataSuccess = (state: Data, action: actionTypes.getAllDataSuccess) => {
  return updateObject(state, { [action.data.type]: action.data.data })
}
const setData = (state: Data, action: actionTypes.SetData) => {
  return updateObject(state, { editingValue: { [action.data.type]: action.data.data} })
}
const reducer = (
  state: Data = initialState,
  action: actionTypes.DataTypes
): Data => {
  switch (action.type) {
    case actionTypes.GET_DATA_SUCCESS: return getAllDataSuccess(state, action);
    case actionTypes.SET_DATA: return setData(state, action);
    default: return state;
  }
}

export default reducer;