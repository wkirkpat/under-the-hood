import * as crypto from "crypto";
import * as jwt from "jsonwebtoken";
import config from "../../config";
import DB from "../../db";

export const createToken = async (payload: IPayload) => {
  let tokenid: any = await DB.Tokens.insert(payload.userid);
  payload.accesstokenid = tokenid.insertId;
  payload.unique = crypto.randomBytes(32).toString("hex");
  let token = jwt.sign(payload, config.secret, { expiresIn: "15d" });
  await DB.Tokens.update(payload.accesstokenid, token);
  return token;
};

export const validToken = async (token: string) => {
  let payload: IPayload = <IPayload>jwt.decode(token);
  console.log(payload);
  let [accesstokenid]: any = await DB.Tokens.findOne(
    payload.accesstokenid,
    token
  );
  if (!accesstokenid) {
    throw new Error("Invalid Token");
  } else {
    return accesstokenid;
  }
};

export interface IPayload {
  [key: string]: any;
  userid: number;
  unique?: string;
}
