import { Tab, Tabs } from "@blueprintjs/core";
import React, { useEffect, useState } from "react";
import { FaWrench } from "react-icons/fa";
import { MdList } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import ProductImage from '../../assets/temp/book-1.jpg';
import Col from "../../Components/Grid/Col";
import Container from "../../Components/Grid/Container";
import Row from "../../Components/Grid/Row";
import Table from "../../Components/Table/Table";
import { deleteData, getAllData } from "../../store/actions/dataActions";
import { ORDER_INITIAL_SORT_STATE, ORDER_TABLE_COLUMNS } from "../../store/constants/index";
import { AppState } from "../../store/reducers";
import { selectLoading } from "../../store/reducers/loadingReducer";
import { DATA_PATH_CONFIG, DELETE_DATA_TYPES } from "../../store/types/dataTypes";



const Orders: React.FC = () => {
	const [selectedTabId, setSelectedTabId] = useState<any>('order-details');

	const dispatch = useDispatch();
	const orders = useSelector<AppState, any>(state => state.data.orders);
	const ordersLoading = useSelector(selectLoading(DATA_PATH_CONFIG.ORDERS.type));


	useEffect(() => {
		dispatch(getAllData(DATA_PATH_CONFIG.ORDERS))
		// eslint-disable-next-line
	}, [])

	const reloadData = async () => {
		await dispatch(getAllData(DATA_PATH_CONFIG.ORDERS))
	}
	return (
		<>

			<Table
				title={{
					text: "Orders",
					icon: <MdList />
				}}
				data={orders}
				columns={ORDER_TABLE_COLUMNS}
				sortConfig={ORDER_INITIAL_SORT_STATE}
				loading={ordersLoading}
				reloadData={reloadData}
				selectedRowsConfig={{
					delete: (customerIds: string[]) => customerIds.map(async (id) => {
						await dispatch(deleteData(id, DELETE_DATA_TYPES.ORDER))
					}),
					title: (value: Order) => `${value.order_id}`,
					idAccessor: "order_id"
				}}
				className={{
					wrapper: "color-primary"
				}}
			/>

			<Tabs id="TabsExample" className="color-select color-primary mt-1" onChange={(id) => { setSelectedTabId(id) }} selectedTabId={selectedTabId}>
				<div className="icon-container">
					<FaWrench />
				</div>

				<Tab id="order-details" title="Edit" panel={<div>
					<Container size="sm">
						<Row>
							<Col sm="6">
								<h2 className="mb-3 heading-1">Order Details</h2>
							</Col>
						</Row>
					</Container>
				</div>} />

				<Tab id="mb" title="Order Info" panel={<div>
					<Row>
						<Col md="4">
							<p style={{ fontWeight: 600, color: "var(--grey60)" }}>Order Placed in June 6, 2020</p>
						</Col>
						<Col md="4">
							<p style={{ fontWeight: 600, color: "var(--grey60)" }}>Total: 9.99 USD </p>
						</Col>
						<Col md="4">
							<p style={{ fontWeight: 600, color: "var(--grey60)" }}>Order ID: #STL-9827-2374 </p>
						</Col>
						<Col md="12">
							<h2 style={{ fontSize: "14px", color: "var(--teal50)", marginBottom: ".5rem" }}>Shipping</h2>
						</Col>
						<Col md="3">
							<p style={{ fontWeight: 600, color: "var(--grey60)" }}>Street: Google</p>
						</Col>
						<Col md="3">
							<p style={{ fontWeight: 600, color: "var(--grey60)" }}>Avenue: Google</p>
						</Col>
						<Col md="3">
							<p style={{ fontWeight: 600, color: "var(--grey60)" }}>Area: Google</p>
						</Col>
						<Col md="3">
							<p style={{ fontWeight: 600, color: "var(--grey60)" }}>Block: Google</p>
						</Col>
						<Col md="12">
							<p style={{ fontWeight: 600, color: "var(--grey60)" }}>Address: Ulrike-Günther-Platz 145, 18410 Guben </p>
						</Col>
						<Col md="3">
							<p style={{ fontWeight: 600, color: "var(--grey60)" }}>Builing: Google</p>
						</Col>
						<Col md="3">
							<p style={{ fontWeight: 600, color: "var(--grey60)" }}>Floor: Google</p>
						</Col>
						<Col md="3">
							<p style={{ fontWeight: 600, color: "var(--grey60)" }}>Appartment No.: Google</p>
						</Col>
						<Col md="12">
							<h2 style={{ fontSize: "14px", color: "var(--teal50)", marginBottom: "1rem" }}>ORDER DETAILS</h2>
						</Col>
						<Col md="12">
							<div className="product-card">
								<div className="image-container">
									<img src={ProductImage} alt="" />
								</div>
								<div className="product-detials">
									<h3 className="product-name">Kid And the Dwarves</h3>
									<p>Quantity: 1</p>
									<p>Price: $9.99</p>
									<a className="product-link" href="/">View Product</a>
								</div>
							</div>
						</Col>
					</Row>
				</div>}
					panelClassName="ember-panel" />

				<Tab id="rx" title="Status" panel={<div />} />
			</Tabs>
		</>
	)
}

export default Orders;