import * as express from "express";
import vehiclesRouter from "./vehicles";
import usersRouter from "./users";

const router = express.Router();

router.use("/vehicles", vehiclesRouter);
router.use("/users", usersRouter);

export default router;
