import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./rootRoute";

export const router = createRouter({ routeTree, context: { isUserAuthorized: undefined! } });

declare module "@tanstack/react-router" {
  interface Register {
    // This infers the type of our router and registers it across your entire project
    router: typeof router;
  }
}
