import * as bcrypt from "bcrypt";

export const hashPassword = (password: string) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
};

export const comparePasswords = (password: string, hash: string) => {
    return bcrypt.compareSync(password, hash);
};