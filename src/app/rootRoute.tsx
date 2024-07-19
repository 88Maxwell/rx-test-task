import { createRootRoute } from "@tanstack/react-router";
import { todoListRoute, todoRoute } from "core/todo/todoRoutes";
import { userLoginRoute } from "core/user/userRoutes";

export const rootRoute = createRootRoute();

export const routeTree = rootRoute.addChildren([todoListRoute, todoRoute, userLoginRoute]);
