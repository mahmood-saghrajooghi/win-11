import React from 'react';
import { useDispatch } from 'react-redux';
import classes from './TableComponents.module.scss';

interface LabelProps {
  type?: string;
  label?: string;
  className?: string;
}
export const Label: React.FC<LabelProps> = ({ children, type, label, className }) => {
  return (
    <span className={[classes.TableLabel, type ? classes[type] : "", className].join(' ')}>
      {label}
      {children}
    </span>
  )
}
export const labelTypes = {
  SUCCESS: "success",
  DANGER: "danger",
  WARNING: "warning",
  INFO: "info",
}

interface TableActionButtonProps {
  dispatchFunction?: (props: any) => any;
  dispatchFunctionProps?: any;
}
export const TableActionButton: React.FC<TableActionButtonProps> = ({ children, dispatchFunction, dispatchFunctionProps }) => {
  const dispatch = useDispatch()
  const clickHandler = () => {
    if (dispatchFunction) {
      dispatch(dispatchFunction(dispatchFunctionProps))
    }
  }
  return <button
    className={[classes.TableInfoLink].join(' ')}
    onClick={clickHandler}
    title={children?.toString()}
  >
    {children?.toString().substring(0, 9)}{children?.toString().length && children?.toString().length > 15 ? "..." : null}
  </button>
}