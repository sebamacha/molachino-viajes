import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    [
      "@vitejs/plugin-cors",
      {
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE"],
      },
    ],
  ],
});
