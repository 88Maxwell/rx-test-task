import { Outlet } from "@tanstack/react-router";

export const UnauthorizedLayout = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full bg-slate-800 text-white">
      <h1 className="text-5xl mb-2">Unuthorized layout</h1>
      <Outlet />
    </div>
  );
};
