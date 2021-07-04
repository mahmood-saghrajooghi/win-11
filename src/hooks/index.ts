import React, { useEffect, useState } from "react"
import validator from 'validator';
import { v4 } from 'uuid';

interface ValidationCond {
	cond: boolean
	value?: number
}
interface ValidationRules {
	isEmail?: ValidationCond;
	required?: ValidationCond;
	minLength?: ValidationCond;
	maxLength?: ValidationCond;
}
interface InputProps {
	initialValue?: string | null;
	validationRules?: ValidationRules;
	placeholder?: string;
	className?: string;
	block?: boolean;
	small?: boolean;
	icon?: any;
	type?: string;
	label?: string;
	outsdieEffect?: boolean;
}

export function useInput({ initialValue, validationRules, outsdieEffect, ...rest }: InputProps) {
	const [value, setValue] = useState<string>(initialValue ?? "");
	const [isValid, setIsValid] = useState<boolean>(false);
	const [isOutsideEffect, setIsOutsideEffect] = useState<boolean>(outsdieEffect ?? false);
	const id = v4();

	const validate = (value: string) => {
		let valid = true;
		if (validationRules?.required?.cond) {
			if (validator.isEmpty(value)) {
				valid = false;
			}
		}
		if (validationRules?.isEmail?.cond) {
			if (!validator.isEmail(value)) {
				valid = false
			}
		}
		if (validationRules?.maxLength?.cond) {
			if (!validator.isByteLength(value, { max: validationRules.maxLength.value })) {
				valid = false;
			}
		}
		if (validationRules?.minLength?.cond) {
			if (!validator.isByteLength(value, { min: validationRules.minLength.value })) {
				valid = false;
			}
		}
		setIsValid(valid);
	}

	const setValueHandler = (e: React.ChangeEvent<HTMLInputElement> | string, effected?: boolean) => {
		validate(typeof e !== 'string' ? e.currentTarget.value : e);
		setValue(typeof e !== 'string' ? e.currentTarget.value : e);
		if (effected) {
			setIsOutsideEffect(false);
			setTimeout(() => {
				setIsOutsideEffect(true);
			}, 50)
		}
	}

	useEffect(() => {
		if (initialValue) validate(initialValue);

		// eslint-disable-next-line
	}, [])

	return {
		value: value,
		changed: setValueHandler,
		isValid,
		id,
		outsideEffect: isOutsideEffect,
		...rest
	}
}