export type LoginFormValues = {
  email: string;
  password: string;
};

export type LoginPageProps = {
  onLogin: (v: LoginFormValues) => void;
};
