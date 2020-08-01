import { Query } from "../index";

//Grab a token by its id and the value of the token
export const findOne = (id: string, token: string) => Query("SELECT * FROM access_tokens WHERE id = ? AND token = ?", [id, token]);

//Inserts the userid for a token, doesn't create the token itself, that is done in a later update to the same record
export const insert = (userid: number) => Query("INSERT INTO access_tokens(userid) VALUES(?)", [userid]);

//Updates a record, providing the token
export const update = (id: string, token: string) => Query("UPDATE access_tokens SET token = ? WHERE id = ?", [token, id]);

export default {
    findOne,
    insert,
    update
}

