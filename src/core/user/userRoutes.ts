import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "app/rootRoute";

import LoginPage from "../../pages/LoginPage";
import AuthorizedLayout from "core/user/layouts/AuthorizedLayout";
import UnauthorizedLayout from "core/user/layouts/UnauthorizedLayout";

export const authorizedLayoutRoute = createRoute({
  id: "authorizedLayoutRoute",
  getParentRoute: () => rootRoute,
  component: AuthorizedLayout,
});

export const unauthorizedLayoutRoute = createRoute({
  id: "unauthorizedLayoutRoute",
  getParentRoute: () => rootRoute,
  component: UnauthorizedLayout,
});

export const userLoginRoute = createRoute({
  getParentRoute: () => unauthorizedLayoutRoute,
  path: "/login",
  component: LoginPage,
});
