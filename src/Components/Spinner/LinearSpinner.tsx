import React from 'react';

interface Props {
  white?: boolean;
  width?: `${number}px`;
  height?: `${number}px`;
  strokeWidth?: string;
  cx?: string;
  cy?: string;
  r?: string;
  className?: string;
}

const LineraSpinner: React.FC<Props> = ({ white, width = "10px", height = "10px", strokeWidth = "4", cx = "44", cy = "44", r = "20", className }) => {
  return (
    <div className={["linear-spinner-container", white ? "white-spinner" : "", className].join(' ')} style={{ width: width, height: height }} role="progressbar" >
      <div className="linear-spinner-back" style={{ width: width, height: height }}>
        <svg className="spinner-svg" viewBox="22 22 44 44">
          <circle className="spinner-circle" cx={cx} cy={cy} r={r} fill="none" strokeWidth={strokeWidth}></circle>
        </svg>
      </div>
      <div className="linear-spinner-front" style={{ width: width, height: height }}>
        <svg className="spinner-svg" viewBox="22 22 44 44">
          <circle className="spinner-circle" cx={cx} cy={cy} r={r} fill="none" strokeWidth={strokeWidth}></circle>
        </svg>
      </div>
    </div>

  );
}

export default React.memo(LineraSpinner);