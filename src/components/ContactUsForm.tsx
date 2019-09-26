import React, { Fragment } from 'react';
import { MyForm } from './form';
import { InputField } from './inputField';

export const ContactUsForm: React.SFC = () => {
  return (
    <MyForm 
      action="http://localhost:4351/api/contactus"
      render={() => (
        <Fragment>
          <div className="alert alert-info" role="alert">
            Enter the information about you below
          </div>
          <InputField id="name" label="Username" />
          <InputField id="email" label="Email" />
          <InputField id="password" label="Password" />
        </Fragment>
      )}
    />
  )
}
