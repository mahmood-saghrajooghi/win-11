import { HTMLTable } from "@blueprintjs/core";
import React from "react";

interface TableRootProps {
	className?: {
		wrapper?: string;
		table?: string;
	}
}

export const CustomTable: React.FC<TableRootProps> = ({ children, className }) => {
	return (
		<div className={["table-wrapper color-select", className?.wrapper].join(' ')}>
			<HTMLTable condensed interactive striped className={["table-root", className?.table].join(' ')} >
				{children}
			</HTMLTable>
		</div>
	)
}