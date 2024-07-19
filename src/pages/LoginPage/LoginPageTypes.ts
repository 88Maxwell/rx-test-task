export type LoginFormValues = {
  login: string;
  password: string;
};

export type LoginPageProps = {
  onLogin: (v: LoginFormValues) => void;
};
