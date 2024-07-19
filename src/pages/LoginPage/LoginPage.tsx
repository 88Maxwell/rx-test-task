import { useForm } from "react-hook-form";
import { LoginFormValues, LoginPageProps } from "./LoginPageTypes";
import { Button, Heading } from "@radix-ui/themes";
import { InputFormField } from "shared/components/InputFormField";

export const LoginPage = ({ userAuthorizationStore }: LoginPageProps) => {
  const { register, handleSubmit } = useForm<LoginFormValues>();

  return (
    <form
      className="flex flex-col p-10 rounded-md min-w-[50%] bg-blue-400/10"
      onSubmit={handleSubmit(userAuthorizationStore.login)}
    >
      <Heading className="text-3xl mb-8">Login page</Heading>
      <InputFormField
        type="email"
        className="mb-4"
        {...register("email")}
        placeholder="email"
        label="Email"
      />
      <InputFormField
        className="mb-4"
        {...register("password")}
        placeholder="password"
        label="Password"
      />
      <Button className="mt-2" type="submit">
        Login
      </Button>
    </form>
  );
};
