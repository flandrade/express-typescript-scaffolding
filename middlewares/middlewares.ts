import { Application } from "express";

import router from "./routers";

type Middleware = (app: Application) => Application;

const middlewares: Middleware[] = [
  router
];

export default function(app: Application): Application {
  return middlewares.reduce((app, middleware) => middleware(app), app);
}
