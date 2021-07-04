import { Card } from "@blueprintjs/core";
import React from 'react';
import { FaBell } from 'react-icons/fa';
import { MdChatBubble, MdDoneAll, MdErrorOutline, MdSync } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { setData } from "../../store/actions/dataActions";
import { clearSelectedRows } from "../../store/actions/layoutActions";
import { AppState } from "../../store/reducers";
import { selectLoading } from "../../store/reducers/loadingReducer";
import { EDITING_VALUE_TYPES } from "../../store/types/dataTypes";
import { SelectedRowsConfig } from "../../store/types/layoutTypes";
import { AddressInfo, OrderInfo, ProductInfo, RowActions, UserInfo } from "./RightPanelComponents";



const RightPanel: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const selectedRows = useSelector<AppState, { values: any }[]>(state => state.layout.selectedRows);
  const SelectedRowsConfig = useSelector<AppState, SelectedRowsConfig | null>(state => state.layout.selectedRowsConfig);

  const customerInfo = useSelector<AppState, Customer | undefined>(state => state.data.editingValue?.customer);
  const customerLoading = useSelector(selectLoading(EDITING_VALUE_TYPES.CUSTOMER));

  const orderInfo = useSelector<AppState, Order | undefined>(state => state.data.editingValue?.order);
  const orderLoading = useSelector(selectLoading(EDITING_VALUE_TYPES.ORDER));

  const addressInfo = useSelector<AppState, CustomerAddress | undefined>(state => state.data.editingValue?.address);
  const addressLoading = useSelector(selectLoading(EDITING_VALUE_TYPES.ADDRESS));

  const productInfo = useSelector<AppState, Product | undefined>(state => state.data.editingValue?.product);
  const productLoading = useSelector(selectLoading(EDITING_VALUE_TYPES.PRODUCT));;


  const toggleAllSelectedRows = useSelector<AppState, (props: boolean) => void>(state => state.layout.selectedRowToggle);

  const editCustomerClickHandler = () => {
    if (customerInfo) {
      dispatch(setData({ type: EDITING_VALUE_TYPES.CUSTOMER, data: customerInfo }));
      if (history.location.pathname !== "/customers") history.push('/customers')
    }
  }

  const editOrderClickHandler = () => {
    if (orderInfo) {
      dispatch(setData({ type: EDITING_VALUE_TYPES.ORDER, data: orderInfo }));
      if (history.location.pathname !== "/orders") history.push('/orders')
    }
  }

  const editAddressClickHandler = () => {
    if (addressInfo) {
      dispatch(setData({ type: EDITING_VALUE_TYPES.ADDRESS, data: addressInfo }));
      if (history.location.pathname !== "/address") history.push('/address')
    }
  }
  const editProductClickHandler = () => {
    if (productInfo) {
      dispatch(setData({ type: EDITING_VALUE_TYPES.PRODUCT, data: productInfo }));
      if (history.location.pathname !== "/product") history.push('/product')
    }
  }

  const clear = () => {
    dispatch(clearSelectedRows());
    toggleAllSelectedRows(false);
  }

  return (
    <div className="right-panel-wrapper color-select color-primary">
      <RowActions rows={selectedRows} config={SelectedRowsConfig} clear={clear} />

      {selectedRows.length <= 0
        ? <>
          < UserInfo
            customerInfo={customerInfo}
            customerLoading={customerLoading}
            editCustomerClickHandler={editCustomerClickHandler}
          />

          <ProductInfo
            productInfo={productInfo}
            productLoading={productLoading}
            editProductClickHandler={editProductClickHandler}
          />

          <OrderInfo
            orderInfo={orderInfo}
            orderLoading={orderLoading}
            editOrderClickHandler={editOrderClickHandler}
          />

          <AddressInfo
            addressInfo={addressInfo}
            addressLoading={addressLoading}
            editAddressClickHandler={editAddressClickHandler}
          />
        </>
        : null
      }
      <div className="heading mt-auto">
        <h2>
          <FaBell className="icon" /> Notifications
        </h2>
        <button className="refresh-btn">
          <MdSync />
        </button>
      </div>
      {/* <Card className="card-empty">
        <div className="card-content-wrapper">
          <h3 className="heading">No Notifications</h3>
          <p className="content">Card content</p>
        </div>
      </Card> */}
      <Card className="card-danger">
        <div className="card-header">
          <div className="card-title">
            <MdErrorOutline className="icon" /> ORDER STATUS
          </div>
          <div className="right">
            Right Now
          </div>
        </div>
        <div className="card-content-wrapper">
          <h3 className="heading">No Notifications</h3>
          <p className="content">Card content</p>
        </div>
      </Card>
      <Card className="card-primary">
        <div className="card-header">
          <div className="card-title">
            <MdDoneAll className="icon" /> ORDER STATUS
          </div>
          <div className="right">
            Right Now
          </div>
        </div>
        <div className="card-content-wrapper">
          <h3 className="heading">Successfully Delivered</h3>
          <p className="content">Item No. #123456 has been shipped.</p>
        </div>
      </Card>
      <Card className="card-success">
        <div className="card-header">
          <div className="card-title">
            <MdDoneAll className="icon" /> ORDER STATUS
          </div>
          <div className="right">
            Right Now
          </div>
        </div>
        <div className="card-content-wrapper">
          <h3 className="heading">Successfully Delivered</h3>
          <p className="content">Item No. #123456 has been shipped.</p>
        </div>
      </Card>
      <Card className="card-warning">
        <div className="card-header">
          <div className="card-title">
            <MdChatBubble className="icon" /> IMPORTANT
          </div>
          <div className="right">
            Right Now
          </div>
        </div>
        <div className="card-content-wrapper">
          <h3 className="heading">No Notifications</h3>
          <p className="content">Card content</p>
        </div>
      </Card>
    </div >
  )
}

export default RightPanel;