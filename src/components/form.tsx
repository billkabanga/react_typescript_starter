import React from 'react';
import { FormProps, FormState, Errors, Values, FormContext } from '../types/form'

export const formContext = React.createContext<FormContext | undefined>(undefined);
export class MyForm extends React.Component<FormProps, FormState> {
  errors: Errors = {};
  values: Values = {};

  state = {
    values: this.values,
    submitted: false,
    errors: this.errors,
  }

  onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    // code to be added
  }

  /**
   * updates state values with input values
   * @param {values}
   */
  setValues = (values: Values) => {
    this.setState({ values: { ...this.state.values, ...values } });
  }

  /**
   * checks if there are errors in the errors object
   * @param errors 
   * @returns {haveError}
   */
  haveErrors(errors: Errors) {
    let haveError: boolean = false;
    Object.keys(errors).map((key: string) => {
      if (errors[key].length > 0) {
        haveError = true;
      }
    });
    return haveError;
  }

  /**
   * handles form submission
   * @param {React.FormEvent<HTMLFormElement>}
   */
  handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    console.log(this.state.values);
    if (this.validateForm()) {
      const submitted: boolean = await this.submitForm();
      this.setState({ submitted });
    }
  }

  /**
   * executes validation for form fields
   * @returns {boolean}
   */
  validateForm(): boolean {
    // to be done
    return true;
  }

  /**
   * handles form submission to http api
   * @returns {boolean}
   */
  async submitForm(): Promise<boolean> {
    // to be done
    return true;
  }

  render() {
    const { submitted, errors } = this.state;
    const context: FormContext = {
      ...this.state,
      setValues: this.setValues
    };

    return (
      <formContext.Provider value={context}>
        <form onSubmit={this.handleSubmit} noValidate={true}>
          <div className="container">
            {this.props.render()}
            <div className="form-group">
              <button type="submit" className="btn btn-primary" disabled={this.haveErrors(errors)}>Submit</button>
            </div>
            {
              submitted && (
                <div className="alert alert-info" role="alert">
                  The form was successfully submitted!
                </div>
              )
            }
            {
              !submitted && !this.haveErrors(errors) &&
              <div className="alert alert-danger" role="alert">
                Sorry an unexpected error occured
              </div>
            }
            {
              !submitted && this.haveErrors(errors) &&
              <div className="alert alert-danger" role="alert">
                Form is invalid, please review your information and try again
              </div>
            }
          </div>
        </form>
      </formContext.Provider>
    )
  }
}
