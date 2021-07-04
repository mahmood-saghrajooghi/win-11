import React from "react";
import classes from './Buttons.module.scss';

export const types: {
	PRIMARY: "PRIMARY",
	SECONDARY: "SECONDARY"
}
	= {
	PRIMARY: "PRIMARY",
	SECONDARY: "SECONDARY"
}
interface ButtonProps {
	type?: "PRIMARY" | "SECONDARY";
	onClick?: () => void
	disabled?: boolean;
}
export const Button: React.FC<ButtonProps> = ({ children, type, onClick, disabled }) => {
	return (
		<button
			onClick={onClick}
			className={[classes.Button, classes[type ?? ""], disabled ? classes.Disabled : ""].join(" ")}>
			{children}
		</button>
	)
}