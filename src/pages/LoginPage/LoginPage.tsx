import { useForm } from "react-hook-form";
import { LoginFormValues, LoginPageProps } from "./LoginPageTypes";

export const LoginPage = ({ userService }: LoginPageProps) => {
  const { register, handleSubmit } = useForm<LoginFormValues>();

  return (
    <form
      className="flex flex-col gap-2 p-20 rounded-md bg-orange-600"
      onSubmit={handleSubmit(userService.login)}
    >
      <h1 className="text-3xl mb-4">Login page</h1>
      <input className="p-2 rounded-md" {...register("email")} placeholder="email" />
      <input className="p-2 rounded-md" {...register("password")} placeholder="password" />
      <button className="mt-2 bg-white p-2  rounded-md" type="submit">
        Login
      </button>
    </form>
  );
};
