import * as express from "express";

const router = express.Router();

router.get("/", function(_req, res, _next) {
  res.json({ message: "test" });
});

export default router;
