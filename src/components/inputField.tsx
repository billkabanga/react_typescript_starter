import React  from 'react';
import { InputProps } from '../types/inputField';

export const InputField: React.SFC<InputProps> = ({
  id,
  label,
  value
}) => {
  return (
    <div className="form-group">
      {label && <label htmlFor={id}>{label}</label>}
      <input id={id} type="text" value={value} className="form-control"/>
    </div>
  )
}


