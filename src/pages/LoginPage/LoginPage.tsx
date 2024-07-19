import { useForm } from "react-hook-form";
import { LoginFormValues, LoginPageProps } from "./LoginPageTypes";

export const LoginPage = ({ onLogin }: LoginPageProps) => {
  const { register, handleSubmit } = useForm<LoginFormValues>();

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(onLogin)}>
      <input {...register("login")} />
      <input {...register("password")} />
      <button className="bg-primary" type="submit">
        Login
      </button>
    </form>
  );
};
