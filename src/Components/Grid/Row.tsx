import React from 'react';
interface Props {
  children?: any;
  className?: string;
  justify?: "center" | "start" | "end" | "between" | "around";
  align?: "center" | "start" | "end" | "between" | "around";
  style?: React.CSSProperties | undefined;
}
const Row: React.FC<Props> = ({ children, className, justify, align, style }) => {
  return <div className={[
    "row",
    className,
    justify ? `justify-content-${justify}` : "",
    align ? `align-items-${align}` : ""
  ].join(' ')}
    style={style}
  >
    {children}
  </div>
}
export default Row;