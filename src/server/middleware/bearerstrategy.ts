import * as passport from "passport";
import * as BearerStrategy from "passport-http-bearer";
import { validToken } from "../utils/security/tokens";
import DB from "../db";

passport.use(
  new BearerStrategy.Strategy(async (token, done) => {
    try {
      let payload = await validToken(token);
      let [user]: any = await DB.Users.getUserById(payload.userid);
      if (user) {
        delete user.password;
        done(null, user);
      } else {
        done(null, false);
      }
    } catch (e) {
      done(e);
    }
  })
);
