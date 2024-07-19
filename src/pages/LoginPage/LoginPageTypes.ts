import { UserAuthorizationStore } from "core/user/stores/UserAuthorizationStore";

export type LoginFormValues = {
  email: string;
  password: string;
};

export type LoginPageProps = {
  userAuthorizationStore: UserAuthorizationStore;
};
