export interface FormProps {
  action: string;

  // Prop to allow content to be injected
  render: () => React.ReactNode
}

export interface Errors {
  [key: string]: string;
}

export interface FormState {
  submitted?: boolean;
  username: string;
  password: string;
  errors: Errors;
}
