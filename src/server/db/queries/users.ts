import { Query } from "../index";

//gets all users
export const getAllUsers = async () => Query("SELECT * FROM users");

//gets a single user by id
export const getUserById = async (id: string) => Query("SELECT users.username, users.firstName, users.lastName FROM users WHERE id = ?", [id]);

//Gets a user by email, used for auth
export const getUserByEmail = async (email: string) => Query("SELECT * FROM users WHERE email = ?", [email]); 

export default {
    getAllUsers,
    getUserById,
    getUserByEmail
}