import React  from 'react';
import { InputProps } from '../types/inputField';

export const InputField: React.SFC<InputProps> = ({
  id,
  label,
  value,
  editor,
}) => {
  return (
    <div className="form-group">
      {label && <label htmlFor={id}>{label}</label>}
      {
        editor!.toLowerCase() === 'textbox' && <input id={id} type="text" value={value} className="form-control"/>
      }
      {
        editor!.toLowerCase() === 'textarea' && <textarea id={id} value={value} className="form-control"/>
      } 
    </div>
  )
}


