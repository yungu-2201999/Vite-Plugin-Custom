import { defineConfig } from "vite";
import VitePluginCustom from "../plugin/index.js";

// https://vite.dev/config/
export default defineConfig({
  plugins: [VitePluginCustom()],
});
