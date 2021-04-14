import path from "path";
import { ConfigEnv, UserConfig } from "vite";
import FullReload from "vite-plugin-full-reload";
import viteSvgIcons from "vite-plugin-svg-icons";

const config: (configEnv: ConfigEnv) => UserConfig = () => ({
  publicDir: "fake_dir_so_nothing_gets_copied",
  build: {
    outDir: "web/dist",
    emptyOutDir: true,

    // generate manifest.json in outDir
    manifest: true,

    rollupOptions: {
      // overwrite default .html entry point
      input: "assets/js/main.ts",
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
  plugins: [
    FullReload(["templates/**/*"]),
    viteSvgIcons({
      // Specify the icon folder to be cached
      iconDirs: [path.resolve(process.cwd(), "assets/img/svg-sprite")],
      // Specify symbolId format
      symbolId: "icon-[dir]-[name]",
    }),
  ],
});

export default config;
