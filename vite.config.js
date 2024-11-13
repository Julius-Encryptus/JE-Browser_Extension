import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "public/manifest.json",
          dest: ".",
        },
      ],
    }),
  ],
  build: {
    outDir: "build",
    sourcemap: true,

    rollupOptions: {
      input: {
        main: "./index.html",
      },
    },
  },

  server: {
    hmr: {
      overlay: false,
    },
  },
});