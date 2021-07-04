import { ChartOptions } from "chart.js"

export const ACTIVE_USERS_DATA = {
	labels: Array.from(Array(30), (_, i) => ""),
	datasets: [
		{
			label: false,
			data: [
				...Array.from(Array(25), (_, i) => Math.floor(Math.random() * 20)),
				...Array.from(Array(5), (_, i) => .4)
			],
			backgroundColor: [
				...Array.from(Array(24), (_, i) => '#c6cacc'),
				"#78909c"
			],
			barPercentage: 1.0,
		},
	],
}
export const PAGE_VIEWS_DATA = {

	labels: Array.from(Array(40), (_, i) => ""),
	datasets: [
		{
			label: false,
			data: [
				...Array.from(Array(30), (_, i) => Math.floor(Math.random() * 20)),
				...Array.from(Array(5), (_, i) => .4)
			],
			backgroundColor: [
				...Array.from(Array(29), (_, i) => '#c6cacc'),
				"#78909c"
			],
			barPercentage: 1.0,
		},
	],
}

export const DONOUGHT_DATA = {
	labels: [
		'keyword Bridges',
		'Keyword Gaps',
		'Buyer Keywords',
		'Satisfaction Opportunities',
		'Easy-to-Plumn Keywords',
	],
	datasets: [
		{
			data: [12, 19, 3, 5, 2],
			backgroundColor: [
				'#3e4345',
				'#367bf5',
				'#ea3d2f',
				'#2fa84f',
				'#f3aa18',
			],
		},
	],
}
export const DONOUGHT_OPTIONS = {
	plugins: {
		legend: {
			display: false
		}
	},
	scales: {
		xAxis: {
			display: false
		},
		yAxis: {
			display: false
		}
	},
	borderRadius: 2,
	cutout: 70
}
export const BAR_CHART_OPTIONS = {
	plugins: {
		legend: {
			display: false
		}
	},
	scales: {
		xAxis: {
			display: false
		},
		yAxis: {
			display: false
		}
	},
	borderRadius: 2,
}