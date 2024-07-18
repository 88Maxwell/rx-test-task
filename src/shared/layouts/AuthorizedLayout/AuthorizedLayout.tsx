import { Flex, Heading } from "@radix-ui/themes";
import { Outlet } from "@tanstack/react-router";

export const AuthorizedLayout = () => {
  return (
    <Flex justify={"center"} align={"center"}>
      <Heading>AuthorizedLayout</Heading>
      <Outlet />
    </Flex>
  );
};
