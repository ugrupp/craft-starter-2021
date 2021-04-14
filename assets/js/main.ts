//
// Main entry file
// --------------------------------------------------

import "vite/dynamic-import-polyfill";

// Register sprite svgs
//import "vite-plugin-svg-icons/register";

// Styles entry
import "../css/main.css";

// Static images entry
// @ts-ignore
const staticAssets = import.meta.glob("../img/static/**/*");
if (staticAssets === 123456) {
  console.log("fake code to prevent assets from being tree-shaken(?)");
}

// Modules
