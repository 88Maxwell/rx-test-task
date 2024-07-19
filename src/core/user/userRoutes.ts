import { createRoute, redirect } from "@tanstack/react-router";
import { rootRoute } from "app/rootRoute";

import LoginPage from "../../pages/LoginPage";
import AuthorizedLayout from "core/user/layouts/AuthorizedLayout";
import UnauthorizedLayout from "core/user/layouts/UnauthorizedLayout";
import HomePage from "pages/HomePage";

// AUTHORIZED
export const authorizedLayoutRoute = createRoute({
  id: "authorizedLayoutRoute",
  beforeLoad: ({ context }) => {
    if (context.isUserAuthorized) return;
    throw redirect(userLoginRoute);
  },
  getParentRoute: () => rootRoute,
  component: AuthorizedLayout,
});

export const userHomeRoute = createRoute({
  getParentRoute: () => authorizedLayoutRoute,
  path: "/",
  component: HomePage,
});

// UNAUTHORIZED
export const unauthorizedLayoutRoute = createRoute({
  beforeLoad: ({ context }) => {
    if (!context.isUserAuthorized) return;
    throw redirect(userHomeRoute);
  },
  id: "unauthorizedLayoutRoute",
  getParentRoute: () => rootRoute,
  component: UnauthorizedLayout,
});

export const userLoginRoute = createRoute({
  getParentRoute: () => unauthorizedLayoutRoute,
  path: "/login",
  component: LoginPage,
});
