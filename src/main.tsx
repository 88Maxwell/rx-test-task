import React from "react";
import ReactDOM from "react-dom/client";
import "./input.css";
import "reflect-metadata";
import { Entrypoint } from "./app/components/Entrypoint";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Entrypoint />
  </React.StrictMode>
);
