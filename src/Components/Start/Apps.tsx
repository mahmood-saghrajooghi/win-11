import React from 'react';

export const TopApp: React.FC<{
	label: string;
	src: string;
}> = ({
	src,
	label
}) => {
		return (
			<div className="top-app pt-4 py-2 bg-gray-hover-100 bg-gray-90 transition-300ms ltShad">
				<div className="ui-icon">
					<img width={24} src={`/img/icon/${src}.png`} alt="" />
				</div>
				<div className="text-xs mt-2">{label}</div>
			</div>
		)
	}



export const PinApp: React.FC<{
	label: string;
	src: string;
}> = ({
	src,
	label
}) => {
		return (
			<div className="pn-app">
				<div className="ui-icon pn-icon">
					<img width={24} src={`/img/icon/${src}.png`} alt="" />
				</div>
				<div className="app-name p-none">{label}</div>
			</div>
		)
	}


export const RecApp: React.FC<{
	label: string;
	src: string;
	desc: string;
}> = ({
	src,
	label,
	desc
}) => {
		return (
			<div className="rec-app">
				<div className="ui-icon c-pointer">
					<img width={22} src={`/img/icon/${src}.png`} alt="" />
				</div>
				<div className="app-info p-none">
					<div className="app-name">{label}</div>
					<div className="time-used">{desc}</div>
				</div>
			</div>
		)
	}