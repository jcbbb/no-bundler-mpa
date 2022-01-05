import browserSync from "browser-sync";
import config from "../config/index.js";

const bs = browserSync.create();

bs.init({
  proxy: `localhost:${config.port}`,
  files: ["src/views/*.html", "src/public/js/*.js"],
});
