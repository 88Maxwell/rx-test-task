import { RouterProvider } from "@tanstack/react-router";
import { router } from "app/router";
import { UserAuthorizationStore } from "core/user/stores/UserAuthorizationStore";
import { useObservableState } from "observable-hooks";
import { useService } from "shared/useService";

export function App() {
  const userAuthorizationStore = useService(UserAuthorizationStore);
  const [isUserAuthorized] = useObservableState(userAuthorizationStore.getIsUserAuthorized$, null);

  if (isUserAuthorized === null) return null;

  return <RouterProvider router={router} context={{ isUserAuthorized }} />;
}
