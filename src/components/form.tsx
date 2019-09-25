import React from 'react';
import { FormProps, FormState } from '../types/form'

export class MyForm extends React.Component<FormProps, FormState> {
  state = {
    username: "",
    password: "",
    submitted: false,
  }

  onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    // code to be added
  }

  render() {
    return (
      <div>
        <input type="text"/>
      </div>
    )
  }
}
