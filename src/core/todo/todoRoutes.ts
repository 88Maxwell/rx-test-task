import { createRoute } from "@tanstack/react-router";
import TodoListPage from "../../pages/TodoListPage";
import TodoPage from "../../pages/TodoPage";
import { authorizedLayoutRoute } from "core/user/userRoutes";

export const todoListRoute = createRoute({
  getParentRoute: () => authorizedLayoutRoute,
  path: "/",
  component: TodoListPage,
});

export const todoRoute = createRoute({
  getParentRoute: () => authorizedLayoutRoute,
  path: "/todo/:id",
  component: TodoPage,
});
