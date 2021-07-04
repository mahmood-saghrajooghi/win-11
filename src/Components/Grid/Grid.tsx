import React from "react";

interface GridProps {
	style?: React.CSSProperties;
	className?: string;
	gridTemplateColumns?: string;
	gridTemplateRows?: string;
}

const Grid: React.FC<GridProps> = ({ children, style, gridTemplateColumns, gridTemplateRows, className }) => {
	return <div
		style={{
			...style,
			gridTemplateColumns: gridTemplateColumns,
			gridTemplateRows: gridTemplateRows
		}}
		className={["gird-container", className].join(' ')}
	>
		{children}
	</div>
}

export default Grid;