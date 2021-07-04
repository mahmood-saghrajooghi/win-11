import * as actionTypes from '../types/actions';
import { SelectedRowsConfig } from "../types/layoutTypes";

export const setSelectedRows = (payload: { rows: { values: any }[], config: SelectedRowsConfig }): actionTypes.SetSelectedRows => {
  return {
    type: actionTypes.SET_SELECTED_ROWS,
    payload
  }
}
export const setSelectedRowToggle = (callback: (props: any) => any): actionTypes.SetSelectedRowToggle => {
  return {
    type: actionTypes.SET_SELECTED_ROW_TOGGLE,
    callback
  }
}
export const clearSelectedRows = (): actionTypes.ClearSelectedRows => {
  return {
    type: actionTypes.CELAR_SELECTED_ROWS,
  }
}
export const filterSelectedRow = (id: string, idAccessor: string): actionTypes.FilterSelectedRow => {
  return {
    type: actionTypes.FILTER_SELECTED_ROWS,
    id,
    idAccessor
  }
}
