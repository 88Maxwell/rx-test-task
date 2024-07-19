import { createRootRouteWithContext } from "@tanstack/react-router";
import {
  authorizedLayoutRoute,
  unauthorizedLayoutRoute,
  userLoginRoute,
  userHomeRoute,
} from "core/user/userRoutes";

export type RootRouteContext = {
  isUserAuthorized: boolean;
};
export const rootRoute = createRootRouteWithContext<RootRouteContext>()();

export const routeTree = rootRoute.addChildren([
  unauthorizedLayoutRoute.addChildren([userLoginRoute]),
  authorizedLayoutRoute.addChildren([userHomeRoute]),
]);
