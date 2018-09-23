import { Application } from "express";

import routes from "../src/user/router";

export default function(app: Application): Application {
  app.use("/", routes);
  return app;
}
