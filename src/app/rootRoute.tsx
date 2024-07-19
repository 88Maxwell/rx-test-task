import { createRootRoute } from "@tanstack/react-router";
import {
  authorizedLayoutRoute,
  unauthorizedLayoutRoute,
  userLoginRoute,
  userHomeRoute,
} from "core/user/userRoutes";

export const rootRoute = createRootRoute();

export const routeTree = rootRoute.addChildren([
  unauthorizedLayoutRoute.addChildren([userLoginRoute]),
  authorizedLayoutRoute.addChildren([userHomeRoute]),
]);
