import React, { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';

interface Props {
  className?: string;
  type?: string;
  label?: string;
  value: string | number | readonly string[] | undefined;
  changed: (e: any) => any;
  placeholder?: string;
  isValid?: boolean;
  block?: boolean;
  small?: boolean;
  icon?: any;
  id?: string;
  outsideEffect?: boolean;
}

const Input: React.FC<Props> = ({ className, type = "text", label, changed, value, placeholder, isValid = false, block = false, small = false, icon, id, outsideEffect }) => {
  const [focus, setFocus] = useState<boolean>();

  const blurHandler: Function = (currValue: string) => {
    if (currValue.length <= 0) {
      setFocus(false);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setFocus(true);
      blurHandler(value);
    }, 100)
    // eslint-disable-next-line
  }, [outsideEffect])

  const inputContainerClass = [
    "input-container",
    className,
    label ? "has-label" : "",
    icon ? "has-icon" : "",
    small ? "input-small" : "",
    isValid ? 'valid' : 'invalid',
    focus ? 'focus' : '',
    block ? 'block' : ''].join(' ')

  return <div className={inputContainerClass}>
    {
      label
        ? <label className="input-label" htmlFor={id}>{label}</label>
        : ""
    }
    {
      icon ?
        <div className="icon-container">
          {icon}
        </div>
        : ""
    }

    <input
      id={id}
      type={type}
      value={value}
      onChange={changed}
      onFocus={() => setFocus(true)}
      onBlur={blurHandler.bind(this, value)}
      placeholder={placeholder} />
    <FaCheck className={['check-icon'].join(' ')} />
  </div>
}
export default Input;