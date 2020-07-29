import * as mysql from "mysql";
import config from "../config";
import Users from "./queries/users";
import Vehicles from "./queries/vehicles";
import Tokens from "./queries/accesstokens";

const pool = mysql.createPool(config.mysql);

//This is a query helper function, it exists only to make writing queries easier
//The bulk of this function is just the standard template for creating a query
export const Query = <T= any>(query: string, values?: any) => {
    return new Promise ((resolve, reject) => {
        const sql = mysql.format(query, values);   //This formats the commands being sent to mysql in such a way that we can understand them
        console.log(sql);  //This console logs the actual sql commands being sent to the database to help with debugging

        pool.query(sql, (err, results) => {
            if(err) return reject (err);
            else return resolve(results);
        })
    })
}

//Want to make sure to export query folders here
export default {
    Users,
    Vehicles,
    Tokens
}