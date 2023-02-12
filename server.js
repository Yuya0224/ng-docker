const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("./dist/ng-docker"));

app.get("/*", function (req, res) {
  res.sendFile(path.join("./dist/ng-docker/index.html"));
});

app.listen(process.env.PORT || 8080);
