import { Outlet } from "@tanstack/react-router";
import UnauthorizedGuard from "core/user/guards/UnauthorizedGuard";

export const AuthorizedLayout = () => {
  return (
    <UnauthorizedGuard>
      <div className="flex flex-col">
        <h1 className="text-lg">AuthorizedLayout</h1>
        <Outlet />
      </div>
    </UnauthorizedGuard>
  );
};
