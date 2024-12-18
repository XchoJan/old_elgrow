import React from 'react';

const CustomRadioButton = ({ label, checked, onChange }: any) => {
  return (
    <label className="custom-radio">
      {label}
      <input value={label} type="radio" checked={checked} onChange={onChange} />
      <span className="checkmark"></span>
    </label>
  );
};

export default CustomRadioButton;
