export interface FormProps {
  username: string;
  password: string;
  action: string;
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