export interface Data {
  orders?: Order[];
  products?: ProductWithAddonDetails[];
  address?: CustomerAddress[];
  customers?: Customer[];
  editingValue?: {
    order?: Order,
    product?: ProductWithAddonDetails,
    address?: CustomerAddress
    customer?: Customer;
  }
}
export const DATA_PATH_CONFIG = {
  PRODUCT: {
    path: '/product',
    type: 'products'
  },
  ORDERS: {
    path: "/all-orders",
    type: "orders"
  },
  CUSTOMERS: {
    path: "/all-customers",
    type: "customers",
  },
  ADDRESS: {
    path: "/all-address",
    type: "address"
  }
}
export type EditingValueTypes = "order" | "product" | "address" | "customer";
export const EDITING_VALUE_TYPES: {
  ORDER: "order",
  PRODUCT: "product",
  ADDRESS: "address",
  CUSTOMER: "customer"
} = {
  ORDER: "order",
  PRODUCT: "product",
  ADDRESS: "address",
  CUSTOMER: "customer"
}
export type SaveDataTypes = "SAVE_ORDER" | "SAVE_PRODUCT" | "SAVE_ADDRESS" | "SAVE_CUSTOMER"
export const SAVE_DATA_TYPES: {
  ORDER: "SAVE_ORDER",
  PRODUCT: "SAVE_PRODUCT",
  ADDRESS: "SAVE_ADDRESS",
  CUSTOMER: "SAVE_CUSTOMER"
} = {
  ORDER: "SAVE_ORDER",
  PRODUCT: "SAVE_PRODUCT",
  ADDRESS: "SAVE_ADDRESS",
  CUSTOMER: "SAVE_CUSTOMER"
}
export type DeleteDataTypes = "DELETE_ORDER" | "DELETE_PRODUCT" | "DELETE_ADDRESS" | "DELETE_CUSTOMER";
export const DELETE_DATA_TYPES: {
  ORDER: "DELETE_ORDER",
  PRODUCT: "DELETE_PRODUCT",
  ADDRESS: "DELETE_ADDRESS",
  CUSTOMER: "DELETE_CUSTOMER"
} = {
  ORDER: "DELETE_ORDER",
  PRODUCT: "DELETE_PRODUCT",
  ADDRESS: "DELETE_ADDRESS",
  CUSTOMER: "DELETE_CUSTOMER"
}
export interface SaveCustomerPayload {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  landline_phone: string;
}
export interface SaveAddressPayload {
  city: string;
  instruction: string;
  country_cd: string;
  line1: string;
  line2: string;
  line3: string;
  line4: string;
}