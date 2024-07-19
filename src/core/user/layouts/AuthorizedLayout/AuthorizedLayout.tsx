import { Flex } from "@radix-ui/themes";
import { Outlet } from "@tanstack/react-router";
import UnauthorizedGuard from "core/user/guards/UnauthorizedGuard";

export const AuthorizedLayout = () => {
  return (
    <UnauthorizedGuard>
      <Flex direction={"column"}>
        <Outlet />
      </Flex>
    </UnauthorizedGuard>
  );
};
