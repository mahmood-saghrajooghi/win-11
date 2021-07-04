export interface Cart {
  Currency: {
    currency_cd: string;
    symbol: string;
    text_ar: string;
    text_en: string;
  }
  address_id: string | null;
  country_cd: string;
  currency_cd: string;
  subtotal: number;
  order_id: string;
  order_status_id: number;
  tax: number;
  shipping: number;
  discount: number;
  final_amount: number;
  user_id: string | null;
  items: CartItem[] | [];
  cart_id: string | null;
}
export interface CartItem {
  product: Product;
  price_at_checkout: number;
  orderitem_id: string;
  order_id: string;
  customizations_json: string;
  product_id: string;
  qty: number;
  total_price: number;
}