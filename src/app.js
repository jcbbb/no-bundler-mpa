const express = require("express");
const path = require("path");
const eta = require("eta");

const app = express();

app.engine("html", eta.renderFile);
app.set("view engine", "html");
app.set("views", path.join(process.cwd(), "src/views"));
app.use("/public", express.static(path.join(process.cwd(), "src/public")));
app.use("/node_modules", express.static(path.join(process.cwd(), "node_modules")));

app.get("/", (req, res) => {
  res.render("home", {
    title: "Hello world!",
  });
});

app.get("*", (req, res, next) => {
  res.status(404).send("<h1>NOT FOUND</h1>");
});

app.listen(9090, () => console.log("server started on port 9090"));
