import * as express from "express";
import { hashPassword } from "../../utils/security/passwords";
import { createToken } from "../../utils/security/tokens";
import DB from "../../db";

const router = express.Router();

//Use this route to create a new user in the database. This will salt and hash the password
//As well as issue a token so the user doesn't have to login immedaitely after creating an account
router.post("/", async (req, res, next) => {
  try {
    let user = req.body;
    user.password = hashPassword(req.body.password);
    let result: any = await DB.Users.insert(
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
