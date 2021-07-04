import React from 'react';

interface Props {
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  xxl?: string;
  children?: any;
  className?: string;
  widthAuto?: boolean;
  dir?: string;
}

const Col: React.FC<Props> = ({ sm, md, lg, xl, xxl, widthAuto, children, className, dir }) => {
  const classList = [
    'col',
    sm && `col-sm-${sm}`,
    md && `col-md-${md}`,
    lg && `col-lg-${lg}`,
    xl && `col-xl-${xl}`,
    xxl && `col-xxl-${xxl}`,
    widthAuto ? "width-auto" : "",
    className
  ].join(' ')

  return (
    <div className={classList} dir={dir}>{children}</div>
  )
}
export default Col;