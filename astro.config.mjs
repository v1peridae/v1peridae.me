// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  server: {
    host: true, 
  },
  site: 'https://v1peridae.me',
  base: '/v1peridae.me',
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: true,
      allowedHosts: [
        "localhost",
        "127.0.0.1",
        "v1peridae.conduit.ws",
        "conduit.ws"
      ]
    },
  },
});