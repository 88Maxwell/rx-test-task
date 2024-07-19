import { createRootRoute } from "@tanstack/react-router";
import { todoListRoute, todoRoute } from "core/todo/todoRoutes";
import {
  authorizedLayoutRoute,
  unauthorizedLayoutRoute,
  userLoginRoute,
} from "core/user/userRoutes";

export const rootRoute = createRootRoute();

export const routeTree = rootRoute.addChildren([
  unauthorizedLayoutRoute.addChildren([userLoginRoute]),
  authorizedLayoutRoute.addChildren([todoListRoute, todoRoute]),
]);
