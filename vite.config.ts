import { ConfigEnv, UserConfig } from "vite";
import FullReload from "vite-plugin-full-reload";

const config: (configEnv: ConfigEnv) => UserConfig = () => ({
  publicDir: "fake_dir_so_nothing_gets_copied",
  build: {
    outDir: "web/dist",
    emptyOutDir: true,

    // generate manifest.json in outDir
    manifest: true,

    rollupOptions: {
      // overwrite default .html entry point
      input: "assets/js/main.js",
    },
  },
  server: {
    host: "craft-starter-2021.nitro",
    port: 2170,
    strictPort: true,
    watch: {
      ignored: ["**/storage/**"],
    },
  },
  plugins: [FullReload(["templates/**/*"])],
});

export default config;
