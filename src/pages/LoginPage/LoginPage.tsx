import { useForm } from "react-hook-form";
import { LoginFormValues, LoginPageProps } from "./LoginPageTypes";
import { InputFormField } from "shared/components/InputFormField";

export const LoginPage = ({ userAuthorizationStore }: LoginPageProps) => {
  const { register, handleSubmit } = useForm<LoginFormValues>();

  return (
    <form
      className="flex flex-col p-10 rounded-md min-w-[50%] bg-blue-400/10"
      onSubmit={handleSubmit(userAuthorizationStore.login)}
    >
      <h1 className="text-3xl mb-8">Login page</h1>
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
      <button className="p-4 mt-2 bg-blue-400 rounded-md" type="submit">
        Login
      </button>
    </form>
  );
};
