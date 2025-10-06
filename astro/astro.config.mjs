// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  server: {
    host: true, 
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: true,
      allowedHosts: [
        "uncontortive-addie-unenriched.ngrok-free.dev",
        "localhost",
        "127.0.0.1"
      ]
    },
  },
});