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
staticAssets.forEach(() => {}); // noop

// Modules
