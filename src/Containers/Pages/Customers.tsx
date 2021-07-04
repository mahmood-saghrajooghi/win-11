import { Tab, Tabs } from "@blueprintjs/core";
import React, { useEffect, useState } from "react";
import { FaUserAlt, FaWrench } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import ProductImage from '../../assets/temp/book-1.jpg';
import { Button, types } from "../../Components/Buttons/Buttons";
import FormGroup from "../../Components/Form/FormGroup";
import Input from '../../Components/Form/Input';
import Col from "../../Components/Grid/Col";
import Container from "../../Components/Grid/Container";
import Row from "../../Components/Grid/Row";
import LinearSpinner from "../../Components/Spinner/LinearSpinner";
import Table from "../../Components/Table/Table";
import { useInput } from "../../hooks";
import { deleteData, getAllData, saveData } from "../../store/actions/dataActions";
import { CUSTOMERS_INITIAL_SORT_STATE, CUSTOMERS_TABLE_COLUMNS } from "../../store/constants/index";
import { EMAIL_INPUT_CONFIG, FIRST_NAME_INPUT_CONFIG, LANDLINE_PHONE_INPUT_CONFIG, LAST_NAME_INPUT_CONFIG, PHONE_NUMBER_INPUT_CONFIG } from "../../store/constants/inputs";
import { AppState } from "../../store/reducers";
import { selectLoading } from "../../store/reducers/loadingReducer";
import { DATA_PATH_CONFIG, DELETE_DATA_TYPES, SaveCustomerPayload, SAVE_DATA_TYPES } from "../../store/types/dataTypes";

const Customers: React.FC = () => {
	const dispatch = useDispatch();
	const [selectedTabId, setSelectedTabId] = useState<any>('order-details');

	const customers = useSelector<AppState, any>(state => state.data.customers);
	const customersLoading = useSelector(selectLoading(DATA_PATH_CONFIG.CUSTOMERS.type));

	const selectedCustomer = useSelector<AppState, Customer | undefined>(state => state.data.editingValue?.customer);
	const savingCustomerLoading = useSelector(selectLoading(SAVE_DATA_TYPES.CUSTOMER));

	const firstName = useInput({ ...FIRST_NAME_INPUT_CONFIG, initialValue: selectedCustomer?.first_name });
	const lastName = useInput({ ...LAST_NAME_INPUT_CONFIG, initialValue: selectedCustomer?.last_name })
	const email = useInput({ ...EMAIL_INPUT_CONFIG, initialValue: selectedCustomer?.email })
	const phoneNumber = useInput({ ...PHONE_NUMBER_INPUT_CONFIG, initialValue: selectedCustomer?.phone })
	const landLinePhone = useInput({ ...LANDLINE_PHONE_INPUT_CONFIG, initialValue: selectedCustomer?.phone })

	useEffect(() => {
		firstName.changed(selectedCustomer?.first_name ? selectedCustomer.first_name : "", true);
		lastName.changed(selectedCustomer?.last_name ? selectedCustomer.last_name : "", true);
		email.changed(selectedCustomer?.email ? selectedCustomer.email : "", true);
		phoneNumber.changed(selectedCustomer?.phone ? selectedCustomer.phone : "", true);
		landLinePhone.changed(selectedCustomer?.phone ? selectedCustomer.phone : "", true);
		// eslint-disable-next-line
	}, [selectedCustomer])

	useEffect(() => {
		dispatch(getAllData(DATA_PATH_CONFIG.CUSTOMERS));
		// eslint-disable-next-line
	}, [])

	const reloadData = async () => {
		await dispatch(getAllData(DATA_PATH_CONFIG.CUSTOMERS));
	}
	const saveCustomerHandler = async ({
		customer_id, updatedValues
	}: {
		customer_id?: string;
		updatedValues: SaveCustomerPayload;
	}) => {
		if (customer_id) {
			await dispatch(saveData(SAVE_DATA_TYPES.CUSTOMER, { id: customer_id, updatedValues }));
			await reloadData();
		}
	}

	return (
		<>
			<Table
				title={{
					text: "Customers",
					icon: <FaUserAlt />
				}}
				data={customers}
				columns={CUSTOMERS_TABLE_COLUMNS}
				sortConfig={CUSTOMERS_INITIAL_SORT_STATE}
				loading={customersLoading}
				reloadData={reloadData}
				selectedRowsConfig={{
					delete: (customerIds: string[]) => customerIds.map(async (id) => {
						await dispatch(deleteData(id, DELETE_DATA_TYPES.CUSTOMER))
					}),
					title: (value: Customer) => `${value.email}`,
					idAccessor: "customer_id"
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
								<h2 className="mb-3 heading-1">Customer Info</h2>
							</Col>
						</Row>
						<Row>
							<Col sm="4">
								<FormGroup>
									<Input {...firstName} />
								</FormGroup>
							</Col>
							<Col sm="4">
								<FormGroup>
									<Input {...lastName} />
								</FormGroup>
							</Col>
							<Col sm="4">
								<FormGroup>
									<Input {...email} />
								</FormGroup>
							</Col>
							<Col sm="4">
								<FormGroup>
									<Input {...phoneNumber} />
								</FormGroup>
							</Col>
							<Col sm="4">
								<FormGroup>
									<Input {...landLinePhone} />
								</FormGroup>
							</Col>
						</Row>
						<Row className="mx-0">
							<Button
								onClick={() => {
									saveCustomerHandler({
										customer_id: selectedCustomer?.customer_id,
										updatedValues: {
											first_name: firstName.value,
											last_name: lastName.value,
											email: email.value,
											phone: phoneNumber.value,
											landline_phone: landLinePhone.value
										}
									})
								}}
								type={types.PRIMARY}
								disabled={selectedCustomer === undefined}
							>
								{
									savingCustomerLoading
										? <LinearSpinner
											white
											width="16px"
											height="16px" />
										: "Save"
								}
							</Button>
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

export default Customers;