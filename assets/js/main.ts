//
// Main entry file
// --------------------------------------------------

import "vite/dynamic-import-polyfill";

// Styles entry
import "../css/main.css";

// Static images entry
// @ts-ignore
const staticAssets = import.meta.glob("../img/static/**/*");
if (staticAssets === 123456) {
  console.log("fake code to prevent assets from being tree-shaken(?)");
}

// Modules
import "./lazyload";
import { heroData } from "./hero";

// Alpine JS
import Alpine from "alpinejs/dist/module.esm";

// @ts-ignore
window.Alpine = Alpine;

// Add components
Alpine.data("hero", heroData);
Alpine.start();
