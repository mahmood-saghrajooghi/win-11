import React from "react";
import { FaCog } from "react-icons/fa";
import classes from "./Card.module.scss";

interface CartProps {
	style?: React.CSSProperties;
	calssName?: string;
	onClick?: {
		body?: (props: any) => void
	}
}

const Card: React.FC<CartProps> = ({ children, calssName, style, onClick }) => {
	return (
		<div
			style={style}
			className={[classes.CardBox, calssName].join(' ')}
			onClick={onClick?.body}
		>
			{children}
			<button className={classes.IconContainer}>
				<FaCog className={classes.Icon} />
			</button>
		</div>
	)
}

export const CardHeader: React.FC<{}> = ({ children }) => {
	return (
		<div className={classes.Title}>
			{children}
		</div>
	)
}
export const CARD_COLORS = {
	SUCCESS: classes ? classes.Success : "",
	DANGER: classes ? classes.Danger : ""
}

export default Card;