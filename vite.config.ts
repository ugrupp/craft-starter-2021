import legacy from "@vitejs/plugin-legacy";
import { ConfigEnv, UserConfig } from "vite";
import FullReload from "vite-plugin-full-reload";

const config: (configEnv: ConfigEnv) => UserConfig = ({ command }) => ({
  base: command === "serve" ? "" : "/dist/",
  build: {
    outDir: "./web/dist",
    emptyOutDir: true,

    // generate manifest.json in outDir
    manifest: true,

    rollupOptions: {
      // overwrite default .html entry point
      input: "/assets/js/main.ts",
    },
  },
  server: {
    host: "craft-starter-2021.nitro",
    port: 2170,
    strictPort: true,
  },
  plugins: [
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
    FullReload(["templates/**/*"]),
  ],
});

export default config;
