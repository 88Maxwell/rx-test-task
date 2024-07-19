import { setupWorker } from "msw/browser";
import { mockUserServiceHandlers } from "./mockUserServiceHandlers.ts";

export const worker = setupWorker(...mockUserServiceHandlers);
