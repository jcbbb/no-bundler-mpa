import express from "express";
import path from "path";
import routes from "./routes/index.js";
import * as eta from "eta";

export const app = express();

app.engine("html", eta.renderFile);
app.set("view engine", "html");
app.set("views", path.join(process.cwd(), "src/views"));
app.use("/public", express.static(path.join(process.cwd(), "src/public")));
app.use("/node_modules", express.static(path.join(process.cwd(), "node_modules")));

app.use(routes);

app.get("*", (req, res, next) => {
  res.status(404).send("<h1>NOT FOUND</h1>");
});
