import React from 'react';

const FormGroup: React.FC<{ children?: React.ReactNode, label?: string, className?: string, labelClassName?: string }> = ({ children, label, className, labelClassName }) => {
  return (
    <div className={["form-group", className].join(' ')}>
      {
        label
          ? <label className={["label", labelClassName].join(" ")}>{label}</label>
          : ""
      }
      <div>
        {children}
      </div>
    </div>
  )
}

export default FormGroup;