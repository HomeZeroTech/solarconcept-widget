import { readFileSync, writeFileSync } from "node:fs";
import { transformSync } from "esbuild";

const path = "docs/widget.js";
const code = readFileSync(path, "utf8");

const { code: minified } = transformSync(code, {
    loader: "js",
    minifyWhitespace: true,
    // identifiers/syntax are already minified by Vite's esbuild build step
});

writeFileSync(path, minified);
