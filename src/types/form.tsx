export interface FormProps {
  username: string;
  password: string;
}

export interface FormState {
  submitted?: boolean;
  username: string;
  password: string;
}