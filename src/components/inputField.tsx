import React  from 'react';
import { InputProps } from '../types/inputField';
import { formContext } from './form';
import { FormContext } from '../types/form';

export const InputField: React.SFC<InputProps> = ({
  id,
  label,
  value,
  editor,
}) => {
  return (
    <formContext.Consumer>
      {(context: FormContext | any) => (
        <div className="form-group">
          {label && <label htmlFor={id}>{label}</label>}
          {
            editor!.toLowerCase() === 'textbox' && <input id={id} type="text" value={value} className="form-control" onChange={(e: React.FormEvent<HTMLInputElement>) => context.setValues({ [id]: e.currentTarget.value })}/>
          }
          {
            editor!.toLowerCase() === 'textarea' && <textarea id={id} value={value} className="form-control" onChange={(e: React.FormEvent<HTMLTextAreaElement>) => context.setValues({ [id]: e.currentTarget.value })}/>
          } 
        </div>
        )
      }
    </formContext.Consumer>
  )
}


