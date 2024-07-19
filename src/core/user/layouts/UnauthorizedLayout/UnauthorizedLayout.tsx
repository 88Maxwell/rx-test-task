import { Outlet } from "@tanstack/react-router";
import AuthorizedGuard from "core/user/guards/AuthorizedGuard";

export const UnauthorizedLayout = () => {
  return (
    <AuthorizedGuard>
      <div className="flex flex-col justify-center items-center h-full">
        <h1 className="text-lg">UnauthorizedLayout</h1>
        <Outlet />
      </div>
    </AuthorizedGuard>
  );
};
