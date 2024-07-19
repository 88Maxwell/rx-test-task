import { redirect } from "@tanstack/react-router";
import { UserAuthorizationStore } from "core/user/stores/UserAuthorizationStore";
import { useObservableState } from "observable-hooks";
import { PropsWithChildren } from "react";
import { useService } from "shared/useService";

export const AuthorizedGuard = ({ children }: PropsWithChildren) => {
  const userAuthorizationStore = useService(UserAuthorizationStore);
  const [authorizedUser] = useObservableState(userAuthorizationStore.getAuthorizedUser$);
  const isAuthorized = Boolean(authorizedUser);

  if (!isAuthorized) redirect({ to: "/login" });

  return children;
};
