import { Label, Control, Field } from "@radix-ui/react-form";
import { InputFormFieldProps } from "./InputFormFieldTypes";
import clsx from "clsx";
import { ForwardedRef, forwardRef } from "react";

const InputFormFieldBase = (
  { className, placeholder, label, type = "text", ...props }: InputFormFieldProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return (
    <Field className={clsx("flex flex-col gap-2 rounded-md", className)} {...props}>
      <Label>{label}</Label>
      <Control asChild>
        <input
          ref={ref}
          className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
          required
          type={type}
          placeholder={placeholder}
        />
      </Control>
    </Field>
  );
};

export const InputFormField = forwardRef(InputFormFieldBase);
