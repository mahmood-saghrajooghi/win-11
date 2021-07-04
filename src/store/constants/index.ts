import { Label, labelTypes, TableActionButton } from "../../Components/Table/TableComponents";
import { getDataById } from "../actions/dataActions";
import { EDITING_VALUE_TYPES } from "../types/dataTypes";
export const ORDER_TABLE_COLUMNS = [
	{
		Header: 'Order Id',
		accessor: 'order_id', // accessor is the "key" in the data
		customRender: ({ children }: any) => {
			return TableActionButton({
				children: children.props.value,
				dispatchFunction: getDataById,
				dispatchFunctionProps: { type: EDITING_VALUE_TYPES.ORDER, id: children.props.value }
			});
		}
	},
	{
		Header: 'Short Order Id',
		accessor: 'human_readable_order_id', // accessor is the "key" in the data
	},
	{
		Header: 'Status',
		accessor: 'status_id',
		style: {
			textAlign: "center"
		},
		customRender: ({ children }: any) => {
			let type = undefined;
			let status = '';

			switch (children.props.value) {
				case 1:
					type = labelTypes.WARNING;
					status = "Pending";
					break;
				case 200:
					type = labelTypes.SUCCESS
					status = "Paid";
					break;
				case 402:
					type = labelTypes.DANGER
					status = "Failed";
					break;
			}
			return Label({ label: status, type: type })
		}
	},
	{
		Header: "Tap Code",
		accessor: "tap_confirmation_cd"
	},
	{
		Header: "Customer",
		accessor: "customer_id",
		customRender: ({ children }: any) => {
			return TableActionButton({
				children: children.props.value,
				dispatchFunction: getDataById,
				dispatchFunctionProps: { type: EDITING_VALUE_TYPES.CUSTOMER, id: children.props.value }
			});
		}
	},
	{
		Header: "Total",
		accessor: "amount_total",
		style: {
			textAlign: "center"
		},
	},
	{
		Header: "Currency",
		accessor: "currency_cd",
		style: {
			textAlign: "center"
		},
	},
]
export const ORDER_INITIAL_SORT_STATE = [];

export const CUSTOMERS_TABLE_COLUMNS = [
	{
		Header: 'Customer Id',
		accessor: 'customer_id',
		customRender: ({ children }: any) => {
			return TableActionButton({
				children: children.props.value,
				dispatchFunction: getDataById,
				dispatchFunctionProps: { type: EDITING_VALUE_TYPES.CUSTOMER, id: children.props.value }
			});
		}
	},
	{
		Header: 'First Name',
		accessor: 'first_name',
	},
	{
		Header: 'Last Name',
		accessor: 'last_name',
	},
	{
		Header: 'Eamil',
		accessor: 'email',
	},
	{
		Header: 'Phone',
		accessor: 'phone',
	},
	{
		Header: 'Country Code',
		accessor: 'country_cd',
	},
]
export const CUSTOMERS_INITIAL_SORT_STATE = [];

export const ADDRESS_TABLE_COLUMNS = [
	{
		Header: 'Id',
		accessor: 'address_id', // accessor is the "key" in the data
		customRender: ({ children }: any) => {
			return TableActionButton({
				children: children.props.value,
				dispatchFunction: getDataById,
				dispatchFunctionProps: { type: EDITING_VALUE_TYPES.ADDRESS, id: children.props.value }
			});
		}
	},
	{
		Header: 'City',
		accessor: 'city',
	},
	{
		Header: 'Country Code',
		accessor: 'country_cd',
	},
	{
		Header: 'Customer Id',
		accessor: 'customer_id',
		customRender: ({ children }: any) => {
			return TableActionButton({
				children: children.props.value,
				dispatchFunction: getDataById,
				dispatchFunctionProps: { type: EDITING_VALUE_TYPES.CUSTOMER, id: children.props.value }
			});
		}
	},
]
export const ADDRESS_INITIAL_SORT_STATE = [];

export const PRODUCT_TABLE_COLUMNS = [
	{
		Header: 'Id',
		accessor: 'product_id', // accessor is the "key" in the data
		customRender: ({ children }: any) => {
			return TableActionButton({
				children: children.props.value,
				dispatchFunction: getDataById,
				dispatchFunctionProps: { type: EDITING_VALUE_TYPES.PRODUCT, id: children.props.value }
			});
		}
	},
	{
		Header: 'Title',
		accessor: 'title',
	},
	{
		Header: 'Language',
		accessor: 'lang',
	},
]
export const PRODUCT_INITIAL_SORT_STATE = [];