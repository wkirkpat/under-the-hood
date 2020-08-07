import { Query } from "../index";

//gets a list of all user names
export const getAllUsers = async () =>
  Query("SELECT users.username FROM users");

//gets a single user by id. This only returns the username, firstname, and lastname for security reasons.
//If we need to gather other info we can alter this no problem, we just have to be careful to never send
//the password through here or any other route not needed for auth.
export const getUserById = async (id: string) =>
  Query(
    "SELECT users.username, users.firstName, users.lastName FROM users WHERE id = ?",
    [id]
  );

//Gets a user by email, used for auth.
export const getUserByEmail = async (email: string) =>
  Query("SELECT * FROM users WHERE email = ?", [email]);

//Creates a new user
export const insert = async (
  email: string,
  firstName: string,
  lastName: string,
  password: string
) =>
  Query(
    "INSERT INTO users(email, pass, firstName, lastName) VALUES(?,?,?,?)",
    [email, password, firstName, lastName]
  );

export default {
  getAllUsers,
  getUserById,
  getUserByEmail,
  insert,
};
