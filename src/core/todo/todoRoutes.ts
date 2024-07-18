import { Link, Outlet, createRootRoute, createRoute, createRouter } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import TodoListPage from "../../pages/TodoListPage";

export const todoListRoute = createRoute({
  path: "/",
  component: TodoListPage,
});

export const todoRoute = createRoute({
  path: "/todo/:id",
  component: TodoListPage,
});
