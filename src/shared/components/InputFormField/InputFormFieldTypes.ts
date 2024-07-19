import { ReactNode } from "@tanstack/react-router";

export interface InputFormFieldProps extends React.ComponentProps<"input"> {
  placeholder?: string;
  label: ReactNode;
}
