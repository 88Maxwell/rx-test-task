import { Flex, Heading } from "@radix-ui/themes";
import { Outlet } from "@tanstack/react-router";
import UnauthorizedGuard from "core/user/guards/UnauthorizedGuard";

export const AuthorizedLayout = () => {
  return (
    <UnauthorizedGuard>
      <Flex justify={"center"} align={"center"}>
        <Heading>AuthorizedLayout</Heading>
        <Outlet />
      </Flex>
    </UnauthorizedGuard>
  );
};
