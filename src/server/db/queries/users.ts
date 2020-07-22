import { Query } from "../index";

//gets all users from the database
export const getAllUsers = async () => Query("SELECT * FROM users");

export default {
    getAllUsers
}