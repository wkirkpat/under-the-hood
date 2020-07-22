import * as dotenv from "dotenv";

//checks to see if a .env exists and throws an error if it doesn't
const envFound = dotenv.config();

if(!envFound) {
    throw new Error ("No .env file found");
}

//Any values that need to be pulled from the .env can be exported here
export default {
    mysql: {
        host:process.env.DB_HOST,
        user:process.env.DB_USER,
        password:process.env.DB_PASS,
        database:process.env.DB_SCHEMA
    },
    carMD: {
        authorization: process.env.CARMD_AUTH,
        partnerToken: process.env.CARMD_PARTNER_TOKEN
    },
    secret: process.env.JWT_SECRET
}