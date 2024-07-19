import { HTTPClient, httpClientFactory } from "shared/HttpClient";
import { container } from "tsyringe";
import { config } from "./config";

export const bootstrap = () => {
  container.register(HTTPClient, { useFactory: httpClientFactory(config.API_URL) });
};
