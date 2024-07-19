import React from "react";
import ReactDOM from "react-dom/client";
import "./input.css";
import "@radix-ui/themes/styles.css";
import "reflect-metadata";
import { Entrypoint } from "./app/components/Entrypoint";
import { config } from "app/config";

async function enableMocking() {
  if (!config.IS_DEVELOPMENT) return;

  const { worker } = await import("./mocks/browser");
  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  await worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <Entrypoint />
    </React.StrictMode>
  );
});
