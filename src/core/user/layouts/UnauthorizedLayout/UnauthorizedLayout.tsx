import { Flex } from "@radix-ui/themes";
import { Outlet } from "@tanstack/react-router";
import AuthorizedGuard from "core/user/guards/AuthorizedGuard";

export const UnauthorizedLayout = () => {
  return (
    <AuthorizedGuard>
      <Flex direction="column" justify="center" align="center" className="h-full">
        <Outlet />
      </Flex>
    </AuthorizedGuard>
  );
};
