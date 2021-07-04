export const FIRST_NAME_INPUT_CONFIG = {
	label: "First Name",
	validationRules: {
		required: { cond: true },
		minLength: { cond: true, value: 4 }
	},
	block: true,
}
export const LAST_NAME_INPUT_CONFIG = {
	label: "Last Name",
	validationRules: {
		required: { cond: true },
		minLength: { cond: true, value: 4 }
	},
	block: true,
}
export const EMAIL_INPUT_CONFIG = {
	label: "Email",
	validationRules: {
		required: { cond: true },
		isEmail: { cond: true }
	},
	block: true,
}
export const PHONE_NUMBER_INPUT_CONFIG = {
	label: "Phone Number",
	validationRules: {
		required: { cond: true }
	},
	block: true,
}
export const LANDLINE_PHONE_INPUT_CONFIG = {
	label: "LandLine Phone",
	validationRules: {
		required: { cond: true }
	},
	block: true,
}