import { Outlet } from "@tanstack/react-router";

export const AuthorizedLayout = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full bg-slate-600 text-white">
      <h1 className="text-5xl mb-2">Authorized layout</h1>
      <Outlet />
    </div>
  );
};
