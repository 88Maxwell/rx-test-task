import UserService from "core/user/UserService";

export type LoginFormValues = {
  email: string;
  password: string;
};

export type LoginPageProps = {
  userService: UserService;
};
