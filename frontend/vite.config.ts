import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env": env,
      
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      host: true,
      port: 5173,
      watch: {
        usePolling: true,
      },
      allowedHosts: [
        "transitly-frontend.kindriver-21fb5313.centralus.azurecontainerapps.io",
      ],
      hmr: process.env.NODE_ENV !== "production",
    },
    plugins: [react()],
  };
});
