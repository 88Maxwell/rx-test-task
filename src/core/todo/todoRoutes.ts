import { createRoute } from "@tanstack/react-router";
import TodoListPage from "../../pages/TodoListPage";
import TodoPage from "../../pages/TodoPage";
import { rootRoute } from "app/rootRoute";

export const todoListRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: TodoListPage,
});

export const todoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/todo/:id",
  component: TodoPage,
});
