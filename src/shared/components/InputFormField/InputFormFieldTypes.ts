import { FormFieldProps } from "@radix-ui/react-form";
import { ReactNode } from "@tanstack/react-router";

export interface InputFormFieldProps extends FormFieldProps {
  placeholder?: string;
  label: ReactNode;
  type: React.ComponentProps<"input">["type"];
}
