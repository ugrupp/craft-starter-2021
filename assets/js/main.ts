//
// Main entry file
// --------------------------------------------------

import "vite/dynamic-import-polyfill";

// Register sprite svgs
//import "vite-plugin-svg-icons/register";

// Styles entry
import "../css/main.css";

// Static images entry
const modules = import.meta.glob("../img/static/**/*");
console.log(modules);

// Modules
