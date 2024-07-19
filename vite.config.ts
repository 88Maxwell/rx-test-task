import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tsconfigPath from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ tsDecorators: true }), tsconfigPath(), TanStackRouterVite()],
  esbuild: false,
});
