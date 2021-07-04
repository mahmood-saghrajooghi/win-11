import React from 'react';

interface Props {
  white?: boolean;
  width: string;
  height: string;
  strokeWidth?: string;
  cx?: string;
  cy?: string;
  r?: string;
  className?: string;
}

const Spinner: React.FC<Props> = ({ white, width, height, strokeWidth, cx, cy, r, className }) => {
  const spinnerClassName = ['spinner', white ? 'spinner-white' : '', className];
  return (
    <svg
      className={spinnerClassName.join(' ')}
      style={{
        width: width,
        height: height,
      }}
      viewBox="0 0 66 66"
      xmlns="http://www.w3.org/2000/svg">
      <circle className='path' fill="none" strokeWidth={strokeWidth ?? "6"} strokeLinecap="round" cx={cx ?? "33"} cy={cy ?? "33"} r={r ?? "30"}></circle>
    </svg>
  );
}

export default React.memo(Spinner);