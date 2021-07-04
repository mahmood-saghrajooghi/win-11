import React from 'react';
import { BiCube } from 'react-icons/bi';
import { FaAddressCard, FaList, FaPencilAlt, FaStar, FaTrashAlt, FaUserAlt } from 'react-icons/fa';
import Skeleton from "react-loading-skeleton";
import Row from '../../Components/Grid/Row';
import LinearSpinner from "../../Components/Spinner/LinearSpinner";
import { Label, labelTypes } from "../../Components/Table/TableComponents";
import { SelectedRowsConfig } from '../../store/types/layoutTypes';


interface UserInfoProps {
  customerLoading: boolean;
  customerInfo: Customer | undefined;
  editCustomerClickHandler: () => void
}
export const UserInfo: React.FC<UserInfoProps> = ({
  customerLoading,
  customerInfo,
  editCustomerClickHandler
}) => {
  return (customerLoading ?
    <>
      <div className="heading">
        <h2>
          <FaUserAlt className="icon" style={{ color: "var(--teal40)", fontSize: "14px" }} />User Info
        </h2>
        <LinearSpinner width="14px" height="14px" className="ml-auto" />
      </div>
      <div className="right-panel-group">
        <h3 className="header"><Skeleton width="60%" /></h3>
        <p><Skeleton width="20%" className="mr-3" /><Skeleton width="50%" /></p>
        <p><Skeleton width="20%" className="mr-3" /><Skeleton width="40%" /></p>
        <p><Skeleton width="20%" className="mr-3" /><Skeleton width="60%" /></p>
        <p><Skeleton width="20%" className="mr-3" /><Skeleton width="50%" /></p>
        <p><Skeleton width="20%" className="mr-3" /><Skeleton width="70%" /></p>
      </div>
    </>
    :
    customerInfo === undefined ? null
      : <>
        <div className="heading">
          <h2>
            <FaUserAlt className="icon" style={{ color: "var(--teal40)", fontSize: "14px" }} />User Info
          </h2>
          <button onClick={editCustomerClickHandler}>
            <Label type={labelTypes.INFO}>
              <FaPencilAlt style={{ fontSize: "10px", marginRight: "5px" }} />
              edit
            </Label>
          </button>
        </div>
        <div className="right-panel-group">
          <h3 className="header">{customerInfo?.first_name} {customerInfo?.last_name}</h3>
          <p>
            email: {customerInfo.email}
            {
              customerInfo?.email_verified
                ? <Label type={labelTypes.SUCCESS}>verified</Label>
                : <Label type={labelTypes.WARNING}>not verified</Label>
            }
          </p>
          <p>
            phone Number: {customerInfo?.phone}
            {
              customerInfo?.phone_verified
                ? <Label type={labelTypes.SUCCESS}>verified</Label>
                : <Label type={labelTypes.WARNING}>not verified</Label>
            }
          </p>
          <p>
            Landline Phone: {customerInfo?.phone}
            {
              customerInfo?.phone_verified
                ? <Label type={labelTypes.SUCCESS}>verified</Label>
                : <Label type={labelTypes.WARNING}>not verified</Label>
            }
          </p>
          <p>
            Wrong Tries:
            {
              customerInfo?.wrong_tries
                ? <Label type={labelTypes.DANGER}>{customerInfo?.wrong_tries}</Label>
                : <Label type={labelTypes.SUCCESS}>No</Label>
            }
          </p>
          <p>MFA Code: {
            customerInfo?.mfa_code ?? <Label type={labelTypes.WARNING}>NULL</Label>
          }</p>
        </div>
      </>
  )
}

interface RowProps {
  rows?: { values: any }[];
  config: SelectedRowsConfig | null;
  clear: () => void;
}
export const RowActions: React.FC<RowProps> = ({ rows, config, clear }) => {
  const deleteHandler = () => {
    if (config)
      config.delete(rows ? rows.map(item => item.values[config.idAccessor]) : [])
  }
  return (
    config === null ? null
      : <>
        <div className="heading">
          <h2>
            <FaStar className="icon" style={{ color: "var(--teal40)", fontSize: "14px" }} />Actions
          </h2>
        </div>
        <div className="right-panel-group">
          <h3 className="header">
            <Row className="mx-0" justify="between">
              <span>SelectedRows</span>
              <button onClick={clear}>
                <Label type={labelTypes.WARNING}>Clear</Label>
              </button>
            </Row>
          </h3>
          {
            rows?.map((item, index) => {
              return <p className="right-panel-group__items"><span className="count">#{index}</span><Label type={labelTypes.INFO}>{config?.title(item.values)}</Label></p>;
            })
          }
          <div className="right-panel-group__actions-container">
            {(rows?.length ? rows?.length <= 0 : true)
              ? null
              : <button className="right-panel-group__action-btn" onClick={deleteHandler}>
                <Label
                  className="right-panel-group__action-label"
                  type={labelTypes.DANGER}
                >
                  <FaTrashAlt className="icon" />
                  DELETE SELECTED ITEMS
                </Label>
              </button>
            }
          </div>
        </div>
      </>
  )
}

interface OrderInfoProps {
  orderLoading: boolean;
  orderInfo: Order | undefined;
  editOrderClickHandler: () => void
}
export const OrderInfo: React.FC<OrderInfoProps> = ({
  orderLoading,
  orderInfo,
  editOrderClickHandler
}) => {
  return (orderLoading ?
    <>
      <div className="heading">
        <h2>
          <FaList className="icon" style={{ color: "var(--teal40)", fontSize: "14px" }} />Order Info
        </h2>
        <LinearSpinner width="14px" height="14px" className="ml-auto" />
      </div>
      <div className="right-panel-group">
        <h3 className="header"><Skeleton width="60%" /></h3>
        <p><Skeleton width="20%" className="mr-3" /><Skeleton width="70%" /></p>
        <p><Skeleton width="20%" className="mr-3" /><Skeleton width="80%" /></p>
        <p><Skeleton width="20%" className="mr-3" /><Skeleton width="70%" /></p>
        <p><Skeleton width="20%" className="mr-3" /><Skeleton width="60%" /></p>
        <p><Skeleton width="20%" className="mr-3" /><Skeleton width="80%" /></p>
      </div>
    </>
    :
    orderInfo === undefined ? null
      : <>
        <div className="heading">
          <h2>
            <FaList className="icon" style={{ color: "var(--teal40)", fontSize: "14px" }} />Order Info
          </h2>
          <button onClick={editOrderClickHandler}>
            <Label type={labelTypes.INFO}>
              <FaPencilAlt style={{ fontSize: "10px", marginRight: "5px" }} />
              edit
            </Label>
          </button>
        </div>
        <div className="right-panel-group">
          <h3 className="header">Order Details</h3>
          <p>
            Order Id: <Label>{orderInfo?.order_id}</Label>
          </p>
          <p>
            Customer Id: <Label >{orderInfo?.customer_id}</Label>
          </p>
          <p>
            Cart Id: <Label>{orderInfo?.cart_id}</Label>
          </p>
          <p>
            Delivery Address ID: <Label type={labelTypes.INFO}>{orderInfo?.delivery_address_id}</Label>
          </p>
          <p>
            Currency Code: <Label type={labelTypes.INFO}>{orderInfo?.currency_cd}</Label>
          </p>
          <p>
            Promotion Id:
            {
              orderInfo?.promo_id
                ? <Label type={labelTypes.INFO}> {orderInfo.promo_id} </Label>
                : <Label type={labelTypes.WARNING}>NULL</Label>
            }
          </p>
          <p>
            Status:
            {
              orderInfo?.status_id === 1
                ? <Label type={labelTypes.WARNING}>Pending</Label>
                : orderInfo?.status_id === 200
                  ? <Label type={labelTypes.SUCCESS}>Paid</Label>
                  : <Label type={labelTypes.DANGER}>Payment Failed</Label>

            }
          </p>
        </div>
      </>
  )
}
interface ProductInfoProps {
  productLoading: boolean
  productInfo: Product | undefined;
  editProductClickHandler: () => void
}
export const ProductInfo: React.FC<ProductInfoProps> = ({
  productLoading,
  productInfo,
  editProductClickHandler
}) => {
  return (productLoading ?
    <>
      <div className="heading">
        <h2>
          <BiCube className="icon" style={{ color: "var(--teal40)", fontSize: "14px" }} />Product Info
        </h2>
        <LinearSpinner width="14px" height="14px" className="ml-auto" />
      </div>
      <div className="right-panel-group">
        <h3 className="header"><Skeleton width="60%" /></h3>
        <p><Skeleton width="20%" className="mr-3" /><Skeleton width="70%" /></p>
        <p><Skeleton width="20%" className="mr-3" /><Skeleton width="80%" /></p>
        <p><Skeleton width="20%" className="mr-3" /><Skeleton width="70%" /></p>
        <p><Skeleton width="20%" className="mr-3" /><Skeleton width="60%" /></p>
        <p><Skeleton width="20%" className="mr-3" /><Skeleton width="80%" /></p>
      </div>
    </>
    :
    productInfo === undefined ? null
      : <>
        <div className="heading">
          <h2>
            <BiCube className="icon" style={{ color: "var(--teal40)", fontSize: "16px" }} />Product Info
          </h2>
          <button onClick={editProductClickHandler}>
            <Label type={labelTypes.INFO}>
              <FaPencilAlt style={{ fontSize: "10px", marginRight: "5px" }} />
              edit
            </Label>
          </button>
        </div>
        <div className="right-panel-group">
          <h3 className="header">Product Details</h3>
          <p>
            Id: <Label type={labelTypes.INFO}>{productInfo?.product_id}</Label>
          </p>
          <p>
            title: <Label>{productInfo?.title}</Label>
          </p>
          <p>
            description: <Label>{productInfo?.desc_html}</Label>
          </p>
          <p>
            Minimum Age: <Label>{productInfo?.age_min}</Label>
          </p>
          <p>
            Maximum Age: <Label>{productInfo?.age_max}</Label>
          </p>
          <p>
            language: <Label type={labelTypes.INFO}>{productInfo?.lang}</Label>
          </p>
        </div>
      </>
  )
}
interface AddressInfoProps {
  addressLoading: boolean
  addressInfo: CustomerAddress | undefined;
  editAddressClickHandler: () => void
}
export const AddressInfo: React.FC<AddressInfoProps> = ({
  addressLoading,
  addressInfo,
  editAddressClickHandler
}) => {
  return (addressLoading ?
    <>
      <div className="heading">
        <h2>
          <FaAddressCard className="icon" style={{ color: "var(--teal40)", fontSize: "14px" }} />Address Info
        </h2>
        <LinearSpinner width="14px" height="14px" className="ml-auto" />
      </div>
      <div className="right-panel-group">
        <h3 className="header"><Skeleton width="60%" /></h3>
        <p><Skeleton width="20%" className="mr-3" /><Skeleton width="70%" /></p>
        <p><Skeleton width="20%" className="mr-3" /><Skeleton width="80%" /></p>
        <p><Skeleton width="20%" className="mr-3" /><Skeleton width="70%" /></p>
        <p><Skeleton width="20%" className="mr-3" /><Skeleton width="60%" /></p>
        <p><Skeleton width="20%" className="mr-3" /><Skeleton width="80%" /></p>
      </div>
    </>
    :
    addressInfo === undefined ? null
      : <>
        <div className="heading">
          <h2>
            <FaAddressCard className="icon" style={{ color: "var(--teal40)", fontSize: "16px" }} />Address Info
          </h2>
          <button onClick={editAddressClickHandler}>
            <Label type={labelTypes.INFO}>
              <FaPencilAlt style={{ fontSize: "10px", marginRight: "5px" }} />
              edit
            </Label>
          </button>
        </div>
        <div className="right-panel-group">
          <h3 className="header">Order Details</h3>
          <p>
            Address Id: <Label>{addressInfo?.address_id}</Label>
          </p>
          <p>
            Customer Id: <Label >{addressInfo?.customer_id}</Label>
          </p>
          <p>
            Country Code: <Label type={labelTypes.INFO}>{addressInfo?.country_cd}</Label>
          </p>
          <p>
            City : <Label type={labelTypes.INFO}>{addressInfo?.city}</Label>
          </p>
          <p>
            Line 1: {addressInfo.line1}
          </p>
          <p>
            Line 2: {addressInfo.line2}
          </p>
          <p>
            Line 3: {addressInfo.line3}
          </p>
          <p>
            Line 4: {addressInfo.line4}
          </p>
        </div>
      </>
  )
}