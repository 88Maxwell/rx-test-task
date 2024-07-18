import { Flex, Heading } from "@radix-ui/themes";
import { Outlet } from "@tanstack/react-router";

export const UnauthorizedLayout = () => {
  return (
    <Flex justify={"center"} align={"center"}>
      <Heading>UnauthorizedLayout</Heading>
      <Outlet />
    </Flex>
  );
};
