import toListParams from "./decorator/list-users";
import getUserList from "./operation/list-users";
import toListUsers from "./presenter/list-users";

import { Request, Response, Router } from "express";

const router = Router();

router.get("/users", function(req: Request, res: Response, _next) {
  getUserList(toListParams(req.params))
    .then(toListUsers)
    .then(response => {
      res.json(response);
    });
});

export default router;
