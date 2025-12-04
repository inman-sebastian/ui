import type { Config } from "postcss-load-config";
import postcssImport from "postcss-import";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

const config: Config = {
    plugins: [postcssImport(), autoprefixer(), cssnano()]
};

export default config;
