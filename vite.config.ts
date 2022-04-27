import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import jsx from "@vitejs/plugin-vue-jsx";
import * as path from "path";
export default defineConfig({
  // base: "./",
  plugins: [vue(), jsx()],
  resolve: {
    // 别名
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});