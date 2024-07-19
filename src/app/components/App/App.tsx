import { Theme } from "@radix-ui/themes";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "app/router";

export function App() {
  return (
    <Theme className="h-full" appearance="dark">
      <RouterProvider router={router} />
    </Theme>
  );
}
