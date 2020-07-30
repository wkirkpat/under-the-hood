import * as express from "express";
import { hashPassword } from "../../utils/security/passwords";
import { createToken } from "../../utils/security/tokens";
import DB from "../../db";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    let user = req.body;
    user.password = hashPassword(req.body.password);
    let result: any = await DB.Users.insert(
      user.username,
      user.email,
      user.firstName,
      user.lastName,
      user.password
    );
    let token = await createToken({ userid: result.insertId });
    res.json({
      token,
      userid: result.insertId,
    });
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

export default router;
