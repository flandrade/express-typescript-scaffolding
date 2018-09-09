require("source-map-support").install();
require("dotenv-safe").config();

import * as express from "express";

import middlewares from "app/middlewares";

const app: express.Application = middlewares(express());

app.listen(3000, function() {
  console.log("APP STARTED");
});
