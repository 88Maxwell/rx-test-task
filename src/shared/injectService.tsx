import { ComponentType } from "react";
import { container } from "tsyringe";

export const injectService =
  <T,>(propName: string, ...args: Parameters<typeof container.resolve<T>>) =>
  <PropTypes,>(Component: ComponentType<PropTypes>) =>
  (props: PropTypes) => {
    const service = container.resolve(...args);
    const extendedProps = { ...props, [propName]: service };

    return <Component {...extendedProps} />;
  };
