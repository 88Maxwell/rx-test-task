import { UserAuthorizationStore } from "core/user/stores/UserAuthorizationStore";
import { useObservableState } from "observable-hooks";
import { useService } from "shared/useService";

export function HomePage() {
  const userAuthorizationStore = useService(UserAuthorizationStore);
  const [authorizedUser] = useObservableState(userAuthorizationStore.getAuthorizedUser$, null);

  return (
    <main className="relative flex flex-col gap-4 justify-center items-center h-full text-white w-full">
      <div className="border p-8 border-blue-400 flex flex-col gap-4 text-lg">
        <h2 className="text-3xl font-bold">{authorizedUser?.getFullName()}</h2>
        <span>{`id : ${authorizedUser?.user.id}`}</span>
        <span>{`email : ${authorizedUser?.user.email}`}</span>
        <span>{`createdAt : ${authorizedUser?.user.createdAt}`}</span>
      </div>
      <button
        onClick={userAuthorizationStore.logout}
        className="p-2 bg-red-400 rounded-md absolute bottom-6 left-6"
        type="button"
      >
        Log out
      </button>
    </main>
  );
}
