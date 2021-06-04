import legacy from "@vitejs/plugin-legacy";
import path from "path";
import { ConfigEnv, UserConfig } from "vite";
import FullReload from "vite-plugin-full-reload";
import viteImagemin from "vite-plugin-imagemin";
import viteSvgIcons from "vite-plugin-svg-icons";

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
    viteSvgIcons({
      // Specify the icon folder to be cached
      iconDirs: [path.resolve(process.cwd(), "assets/img/svg-sprite")],
      // Specify symbolId format
      symbolId: "icon-[dir]-[name]",
    }),
    viteImagemin({
      gifsicle: {
        interlaced: true,
      },
      optipng: {
        optimizationLevel: 5,
      },
      webp: {
        quality: 85,
      },
      mozjpeg: {
        quality: 85,
        progressive: true,
        arithmetic: false,
      },
      pngquant: {
        quality: [0.75, 0.9],
        speed: 4,
      },
      svgo: false,
    }),
  ],
});

export default config;