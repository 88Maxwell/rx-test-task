import { Flex, Heading } from "@radix-ui/themes";
import { Outlet } from "@tanstack/react-router";
import AuthorizedGuard from "core/user/guards/AuthorizedGuard";

export const UnauthorizedLayout = () => {
  return (
    <AuthorizedGuard>
      <Flex justify={"center"} align={"center"}>
        <Heading>UnauthorizedLayout</Heading>
        <Outlet />
      </Flex>
    </AuthorizedGuard>
  );
};
