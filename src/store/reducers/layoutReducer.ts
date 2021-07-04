import * as actionTypes from '../types/actions';
import { Layout } from '../types/layoutTypes';
import { updateObject } from '../utility';

const initialState: Layout = {
  selectedRows: [],
  selectedRowToggle: (props) => { return false },
  selectedRowsConfig: null
}

const setSelectedRows = (state: Layout, action: actionTypes.SetSelectedRows) => {
  return updateObject(state, { selectedRows: action.payload.rows, selectedRowsConfig: action.payload.config })
}
const setSelectedRowToggle = (state: Layout, action: actionTypes.SetSelectedRowToggle) => {
  return updateObject(state, { selectedRowToggle: action.callback })
}
const clearSelectedRows = (state: Layout, action: actionTypes.ClearSelectedRows) => {
  return updateObject(state, { selectedRows: [], selectedRowsConfig: null })
}
const filterSelectedRow = (state: Layout, action: actionTypes.FilterSelectedRow) => {
  const updatedRows = state.selectedRows.filter(item => item.values[action.idAccessor] !== action.id);
  return updateObject(state, { setSelectedRows: updatedRows })
}

const reducer = (
  state: Layout = initialState,
  action: actionTypes.LayoutActionTypes
): Layout => {
  switch (action.type) {
    case actionTypes.SET_SELECTED_ROWS: return setSelectedRows(state, action);
    case actionTypes.SET_SELECTED_ROW_TOGGLE: return setSelectedRowToggle(state, action);
    case actionTypes.CELAR_SELECTED_ROWS: return clearSelectedRows(state, action);
    case actionTypes.FILTER_SELECTED_ROWS: return filterSelectedRow(state, action);
    default:
      return state;
  }
}

export default reducer;