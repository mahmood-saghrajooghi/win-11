import { Tab, Tabs } from "@blueprintjs/core";
import React, { useEffect, useState } from "react";
import { FaAddressCard, FaWrench } from "react-icons/fa";
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
import { ADDRESS_INITIAL_SORT_STATE, ADDRESS_TABLE_COLUMNS } from "../../store/constants/index";
import { AppState } from "../../store/reducers";
import { selectLoading } from "../../store/reducers/loadingReducer";
import { DATA_PATH_CONFIG, DELETE_DATA_TYPES, SaveAddressPayload, SAVE_DATA_TYPES } from "../../store/types/dataTypes";


const Address: React.FC = () => {
	const dispatch = useDispatch();
	const [selectedTabId, setSelectedTabId] = useState<any>('order-details');

	const addressList = useSelector<AppState, any>(state => state.data.address);
	const addressListLoading = useSelector(selectLoading(DATA_PATH_CONFIG.ADDRESS.type));

	const selectedAddress = useSelector<AppState, CustomerAddress | undefined>(state => state.data.editingValue?.address);
	const savingAddressLoading = useSelector(selectLoading(SAVE_DATA_TYPES.ADDRESS));

	const city = useInput({
		label: "City",
		validationRules: {
			required: { cond: true },
			minLength: { cond: true, value: 4 }
		},
		block: true,
		initialValue: selectedAddress?.city
	})
	const countryCode = useInput({
		label: "Country Code",
		validationRules: {
			required: { cond: true },
		},
		block: true,
		initialValue: selectedAddress?.country_cd
	})
	const instruction = useInput({
		label: "Instruction",
		validationRules: {
			required: { cond: true },
			isEmail: { cond: true }
		},
		block: true,
		initialValue: selectedAddress?.instruction
	})
	const line1 = useInput({
		label: "Line 1",
		validationRules: {
			required: { cond: true }
		},
		block: true,
		initialValue: selectedAddress?.line1
	})
	const line2 = useInput({
		label: "Line 2",
		validationRules: {
			required: { cond: true }
		},
		block: true,
		initialValue: selectedAddress?.line2
	})
	const line3 = useInput({
		label: "Line 3",
		validationRules: {
			required: { cond: true }
		},
		block: true,
		initialValue: selectedAddress?.line3
	})
	const line4 = useInput({
		label: "Line 4",
		validationRules: {
			required: { cond: true }
		},
		block: true,
		initialValue: selectedAddress?.line4
	})

	useEffect(() => {
		city.changed(selectedAddress?.city ? selectedAddress.city : "", true);
		countryCode.changed(selectedAddress?.country_cd ? selectedAddress.country_cd : "", true);
		instruction.changed(selectedAddress?.instruction ? selectedAddress.instruction : "", true);
		line1.changed(selectedAddress?.line1 ? selectedAddress.line1 : "", true);
		line2.changed(selectedAddress?.line2 ? selectedAddress.line2 : "", true);
		line3.changed(selectedAddress?.line3 ? selectedAddress.line3 : "", true);
		line4.changed(selectedAddress?.line4 ? selectedAddress.line4 : "", true);
		// eslint-disable-next-line
	}, [selectedAddress])

	useEffect(() => {
		dispatch(getAllData(DATA_PATH_CONFIG.ADDRESS))
		// eslint-disable-next-line
	}, [])

	const reloadData = () => {
		dispatch(getAllData(DATA_PATH_CONFIG.ADDRESS))
	}

	const saveAddressHandler = async ({
		address_id, updatedValues
	}: {
		address_id?: string,
		updatedValues: SaveAddressPayload
	}) => {
		if (address_id) {
			await dispatch(saveData(SAVE_DATA_TYPES.ADDRESS, { id: address_id, updatedValues }));
			await reloadData();
		}
	}

	return (
		<>
			<Table
				title={{
					text: "Address",
					icon: <FaAddressCard />
				}}
				data={addressList}
				columns={ADDRESS_TABLE_COLUMNS}
				sortConfig={ADDRESS_INITIAL_SORT_STATE}
				loading={addressListLoading}
				reloadData={reloadData}
				selectedRowsConfig={{
					delete: (addressIds: string[]) => addressIds.map(async (id) => {
						await dispatch(deleteData(id, DELETE_DATA_TYPES.ADDRESS))
					}),
					title: (value: Address) => `${value.address_id}`,
					idAccessor: "address_id"
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
								<h2 className="mb-3 heading-1">Address Info</h2>
							</Col>
						</Row>
						<Row>
							<Col sm="4">
								<FormGroup>
									<Input {...city} />
								</FormGroup>
							</Col>
							<Col sm="4">
								<FormGroup>
									<Input {...countryCode} />
								</FormGroup>
							</Col>
							<Col sm="4">
								<FormGroup>
									<Input {...instruction} />
								</FormGroup>
							</Col>
							<Col sm="6">
								<FormGroup>
									<Input {...line1} />
								</FormGroup>
							</Col>
							<Col sm="6">
								<FormGroup>
									<Input {...line2} />
								</FormGroup>
							</Col>
							<Col sm="6">
								<FormGroup>
									<Input {...line3} />
								</FormGroup>
							</Col>
							<Col sm="6">
								<FormGroup>
									<Input {...line4} />
								</FormGroup>
							</Col>
						</Row>
						<Row className="mx-0">
							<Button
								onClick={() => {
									saveAddressHandler({
										address_id: selectedAddress?.address_id,
										updatedValues: {
											city: city.value,
											country_cd: countryCode.value,
											instruction: instruction.value,
											line1: line1.value,
											line2: line2.value,
											line3: line3.value,
											line4: line4.value
										}
									})
								}}
								type={types.PRIMARY}
								disabled={selectedAddress === undefined}
							>
								{
									savingAddressLoading
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

export default Address;