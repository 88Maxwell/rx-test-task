import { Container, Heading, Text } from "@radix-ui/themes";
import { UserAuthorizationStore } from "core/user/stores/CurrentUserStore";
import { useObservableState } from "observable-hooks";
import { useService } from "shared/useService";

export function HomePage() {
  const userAuthorizationStore = useService(UserAuthorizationStore);
  const [authorizedUser] = useObservableState(userAuthorizationStore.getAuthorizedUser$);

  return (
    <Container>
      <Heading>{authorizedUser?.getFullName()}</Heading>
      <Text>{`id : ${authorizedUser?.user.id}`}</Text>
      <Text>{`email : ${authorizedUser?.user.email}`}</Text>
      <Text>{`createdAt : ${authorizedUser?.user.createdAt}`}</Text>
    </Container>
  );
}
