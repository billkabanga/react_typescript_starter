export interface FormProps {
  action: string;

  // Prop to allow content to be injected
  render: () => React.ReactNode;
}

export interface Values {
  [key: string]: any;
}

export interface Errors {
  [key: string]: string;
}

export interface FormState {
  submitted?: boolean;
  values: Values;
  errors: Errors;
}

export interface FormContext extends FormState {
  setValues: (values: Values) => void;
}

