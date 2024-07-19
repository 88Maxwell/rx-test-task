import { redirect } from "@tanstack/react-router";
import { PropsWithChildren } from "react";

export const UnauthorizedGuard = ({ children }: PropsWithChildren) => {
  const isAuthorized = true;

  if (!isAuthorized) redirect({ to: "/login" });

  return children;
};
