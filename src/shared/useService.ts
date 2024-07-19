import { container } from "tsyringe";

export const useService = <T>(...args: Parameters<typeof container.resolve<T>>) =>
  container.resolve(...args);
