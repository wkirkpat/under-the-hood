import * as express from "express";
import DB from "../../db";

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    let data = await DB.Users.getUserById(req.params.id);
    res.json(data);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

export default router;
