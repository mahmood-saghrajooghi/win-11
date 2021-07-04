import { Cart, CartItem } from './cartTypes';
import { SelectedRowsConfig } from './layoutTypes';


export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export const EDIT_ACCOUNT_REQUEST = 'EDIT_ACCOUNT/REQUEST';
export const EDIT_ACCOUNT_SUCCESS = 'EDIT_ACCOUNT/SUCCESS';
export const EDIT_ACCOUNT_FAILURE = 'EDIT_ACCOUNT/FAILURE';

export const SET_AUTH_REDIRECT_PATH = 'SET_AUTH_REDIRECT_PATH';

export const ADD_TO_CART_REQUEST = 'ADD_TO_CART/REQUEST';
export const ADD_TO_CART_FAILURE = 'ADD_TO_CART/FAILURE';
export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART/SUCCESS';
export const ADD_TO_CART_RESET = 'ADD_TO_CART/RESET';

export const REMOVE_FROM_CART_REQUEST = 'ADD_TO_CART/REQUEST';
export const REMOVE_FROM_CART_FAILURE = 'ADD_TO_CART/FAILURE';
export const REMOVE_FROM_CART_SUCCESS = 'ADD_TO_CART/SUCCESS';

export const FETCH_CART_REQUEST = 'FETCH_CART/REQUEST';
export const FETCH_CART_FAILURE = 'FETCH_CART/FAILURE';
export const FETCH_CART_SUCCESS = 'FETCH_CART/SUCCESS';
export const FETCH_CART_RESET = 'FETCH_CART/RESET';

export const SET_SELECTED_ROWS = 'SET_SELECTED_ROWS';
export const SET_SELECTED_ROW_TOGGLE = 'SET_SELECTED_ROW_TOGGLE';
export const CELAR_SELECTED_ROWS = 'CELAR_SELECTED_ROWS';
export const FILTER_SELECTED_ROWS = 'FILTER_SELECTED_ROWS';


export const CREATE_ORDER_REQUEST = 'CREATE_ORDER/REQUEST';
export const CREATE_ORDER_FAILURE = 'CREATE_ORDER/FAILURE';
export const CREATE_ORDER_SUCCESS = 'CREATE_ORDER/SUCCESS';

export const SET_DATA = "SET_DATA";

export const GET_DATA_REQUEST = "GET_DATA/REQUEST";
export const GET_DATA_SUCCESS = "GET_DATA/SUCCESS";
export const GET_DATA_FAILURE = "GET_DATA/FAILURE";

export interface AuthRequest {
    type: typeof AUTH_REQUEST
}

export interface AuthSuccess {
    type: typeof AUTH_SUCCESS;
    token: string;
    userId: string;
}

export interface AuthFailure {
    type: typeof AUTH_FAILURE;
    error: string;
}

export interface AuthLogout {
    type: typeof AUTH_LOGOUT
}

export interface SetAuthRedirectPath {
    type: typeof SET_AUTH_REDIRECT_PATH;
    path: string | undefined;
}

export interface EditAccountRequest {
    type: typeof EDIT_ACCOUNT_REQUEST
}

export interface EditAccountSuccess {
    type: typeof EDIT_ACCOUNT_SUCCESS
}
export interface EditAccountFailure {
    type: typeof EDIT_ACCOUNT_FAILURE
}

export type AuthActionTypes = AuthRequest | AuthSuccess | AuthFailure | AuthLogout | EditAccountRequest | EditAccountSuccess | EditAccountFailure | SetAuthRedirectPath;

export interface AddToCartRequest {
    type: typeof ADD_TO_CART_REQUEST
    productId: string;
    customizations: {}
}

export interface AddToCartFailure {
    type: typeof ADD_TO_CART_FAILURE;
}

export interface AddToCartSuccess {
    type: typeof ADD_TO_CART_SUCCESS;
    cartInfo: {
        cart: Cart;
        items: CartItem[];
    };
    cartId: string;
}
export interface AddToCartReset {
    type: typeof ADD_TO_CART_RESET;
}

export interface RemoveFromCartRequest {
    type: typeof REMOVE_FROM_CART_REQUEST;
}

export interface RemoveFromCartSuccess {
    type: typeof REMOVE_FROM_CART_SUCCESS;
    cartInfo: {
        cart: Cart;
        items: CartItem[];
    };
    cartId: string;
}

export interface RemoveFromCartFailure {
    type: typeof REMOVE_FROM_CART_FAILURE;
}
export interface FetchCartRequest {
    type: typeof FETCH_CART_REQUEST;
}
export interface FetchCartFailure {
    type: typeof FETCH_CART_FAILURE;
}
export interface FetchCartSuccess {
    type: typeof FETCH_CART_SUCCESS;
    cartInfo: { cart: Cart, items: CartItem[] }
}

export interface FetchCartReset {
    type: typeof FETCH_CART_RESET;
}

export type CartActionTypes = AddToCartFailure | AddToCartSuccess | AddToCartRequest | RemoveFromCartRequest | RemoveFromCartSuccess | RemoveFromCartFailure | FetchCartRequest | FetchCartFailure | FetchCartSuccess;

export interface SetSelectedRows {
    type: typeof SET_SELECTED_ROWS;
    payload: {
        rows: { values: any }[];
        config: SelectedRowsConfig;
    };
}export interface SetSelectedRowToggle {
    type: typeof SET_SELECTED_ROW_TOGGLE;
    callback: (props: boolean) => any
}
export interface ClearSelectedRows {
    type: typeof CELAR_SELECTED_ROWS;
}
export interface FilterSelectedRow {
    type: typeof FILTER_SELECTED_ROWS;
    id: string;
    idAccessor: string;
}

export interface CreateOrderRequest {
    type: typeof CREATE_ORDER_REQUEST;
}
export interface CreateOrderSuccess {
    type: typeof CREATE_ORDER_SUCCESS;
}
export interface CreateOrderFailure {
    type: typeof CREATE_ORDER_FAILURE;
}


export type LayoutActionTypes = SetSelectedRows | FilterSelectedRow | ClearSelectedRows | SetSelectedRowToggle;

export interface dataType {
    type: string;
    data: any;
}
export interface SetData {
    type: typeof SET_DATA;
    data: {
        type: string
        data: any
    };
}

export interface getAllDataSuccess {
    type: typeof GET_DATA_SUCCESS;
    data: dataType
}

export type DataTypes = SetData | getAllDataSuccess;

export type AppActions = AuthActionTypes | CartActionTypes | LayoutActionTypes | DataTypes;