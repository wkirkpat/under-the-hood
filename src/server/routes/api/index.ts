import * as express from "express";
import vehiclesRouter from "./vehicles";
import usersRouter from "./users";
import * as passport from "passport";

const router = express.Router();

//This is implementing our bearer strategy so we can check for a bearer token on any of our api 
//routes. This is effectively connecting our token validation to the server.
router.use((req, res, next) => {
  passport.authenticate(
    "bearer",
    {
      session: false,
    },
    (err, user, info) => {
      if (user) req.user = user;
      return next();
    }
  )(req, res, next);
});

router.use("/vehicles", vehiclesRouter);
router.use("/users", usersRouter);

export default router;
