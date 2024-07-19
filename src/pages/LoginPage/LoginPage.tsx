import { useForm } from "react-hook-form";
import { LoginFormValues, LoginPageProps } from "./LoginPageTypes";
import { Button, Heading } from "@radix-ui/themes";
import { Form } from "@radix-ui/react-form";
import { InputFormField } from "shared/components/InputFormField";

export const LoginPage = ({ userService }: LoginPageProps) => {
  const { register, handleSubmit } = useForm<LoginFormValues>();

  return (
    <Form
      className="flex flex-col p-10 rounded-md bg-orange-800 min-w-[50%]"
      onSubmit={handleSubmit(userService.login)}
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
        type="password"
        className="mb-4"
        {...register("password")}
        placeholder="password"
        label="Password"
      />
      <Button className="mt-2" type="submit">
        Login
      </Button>
    </Form>
  );
};
