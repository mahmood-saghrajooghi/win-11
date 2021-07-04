type CountryCd = 'KW' | 'BH' | 'SA' | 'AE' | 'US';
type CurrencyCd = 'KWD' | 'BHD' | 'SAR' | 'AED' | 'USD';
type Lang = 'ar' | 'en';
type UserTokenProvider = 'google' | 'facebook' | 'local' | 'apple' | 'code';

type Address = {
  address_id: string;
  user_id: string;
  country_cd: string;
  st_pr: string;
  city: string;
  address: string;
  postal_cd: string;
}

interface ProductAddonItem {
  addon_id: number;
  product_id: string;
  title: string;
  desc_html: string;
  is_required: boolean;
  choices: AddonChoice[]
}
interface AddonChoice {
  choice_id: string;
  product_id: string;
  prices: {
    price_id: string;
  }[];
  addon_id: string;
  title: string;
  desc_html: string;
  is_default: boolean;
}
interface Product {
  addons: ProductAddonItem[];
  product_id: string;
  lang: string;
  title: string;
  desc_html: string;
  image_repo: string | null;
  prices: {
    price_id: string;
    discount_tag: string;
    display_price_discounted: string;
    display_price_org: string;
    price: number;
    choice_id: null | string;
    currency_cd: CurrencyCd;
  }[];
  age_min: number;
  age_max: number;
}
interface ProductWithAddonDetails extends Product {
  addons: ProductAddonItem[]
}

interface BookAddonItem {
  product_id: string;
  product_short_cd: string;
  product_type: string;
  addon_default: boolean;
  lang: "EN" | "AR";
  title_str: string;
  desc_html: string;
  image_repo: string;
  AddonType: {
    addon_type_id: number;
    title_en: string;
    title_ar: string;
    subtitle_en: string;
    subtitle_ar: string;
    required: boolean;
  },
  prices:
  {
    id: string;
    product_id: string;
    currency_cd: string;
    country_cd: string;
    price: 0;
    Currency: {
      currency_cd: string;
      text_en: string;
      text_ar: string;
      symbol: string;
    }
  }
}

interface ProductWithAddonDetails extends Product {
  addons: BookAddonItem[]
}



interface AccountInfo {
  firstname: string;
  lastname: string;
  password: string;
  confirmPassword: string;
  email: string;
  phone: string;
}

interface Order {
  amount_discount: number;
  amount_ship: number;
  amount_sum: number;
  amount_tax: number;
  amount_total: number;
  cart_id: string;
  currency_cd: CurrencyCd;
  customer_id: string;
  delivery_address_id: string;
  human_readable_order_id: string;
  order_id: string;
  promo_id: string | null;
  status_id: 1 | 200 | 402;
  tap_confirmation_cd: null
}

interface OrderItem {
  orderitem_id: string;
  order_id: string;
  parent_id: string;
  product_id: string;
  customizations_json: string;
  price_at_checkout: number;
  qty: number;
}

interface Customer {
  country_cd: CurrencyCd;
  customer_id: string;
  email: string;
  email_verified: boolean;
  first_name: string;
  last_name: string;
  mfa_code: string | null;
  mfa_expiration_dt: string | Date;
  password: null
  phone: string;
  phone_verified: boolean;
  wrong_tries: null

}
interface CustomerAddress {
  address_id: string;
  address_lat: number;
  address_lon: number;
  city: string;
  country_cd: string;
  customer_id: string;
  instruction: string;
  line1: string;
  line2: string;
  line3: string;
  line4: string;
}
// edit character types
type Gender = "boy" | "girl"
type Clothes = 'arabic' | "overall" | "dress";
type HairColor = 'black' | 'brown' | 'blonde' | 'red';
type EyeColor = 'gray' | 'green' | 'blue' | 'brown';
type SkinTone = 'light' | 'mid';
type HairStyle = 'straight' | 'curly' | 'stylish' | 'scarf' | 'wavy' | 'wavy-side';

type GeneratedBookJson = {
  gender: "boy" | "girl",
  eye: "gray" | "blue" | "brown" | "green",
  haircolor: "black" | "blonde" | "red" | "brown",
  skin: "light" | "mid",
  clothes: "arabic" | "overall" | "dress",
  hair: "straight" | "curly" | "stylish" | "scarf" | "wavy" | "wavy-side",
  vars: {
    child_name: string,
    dedication: string
  }
};


type TabletHairColor = 'black' | 'brown' | 'blonde';
type TabletClothes = 'arab' | 'tshirt';
type TabletHairStyle = 'straight' | 'curly' | 'ponytail' | 'short' | 'long' | 'scarf';
type TabletEyeColor = 'black' | 'green' | 'blue' | 'brown';

type TabletGerenratedBookJson = {
  gender: Gender;
  eye: TabletEyeColor
  haircolor: TabletHairColor;
  skin: SkinTone;
  clothes: TabletClothes
  hair: TabletHairStyle;
  vars: {
    child_name: string,
    dedication: string,
  }
}