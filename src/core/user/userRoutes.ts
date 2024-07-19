import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "app/rootRoute";

import LoginPage from "../../pages/LoginPage";

export const userLoginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: LoginPage,
});
