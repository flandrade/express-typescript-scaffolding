import toListParams from "./decorator/list-users";
import getUserList from "./operation/list-users";
import toListUsers from "./presenter/list-users";

import { Request, Response, Router } from "express";

const router = Router();

router.get("/users", function(req: Request, res: Response) {
  getUserList(toListParams(req.params))
    .then(toListUsers)
    .then(res.json);
});

export default router;
