"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AllUsersReppo = (Repository) => {
    const GetAllUsers = () => {
        // eslint-disable-next-line no-console
        console.log("reppoil vannu_____________________");
        return Repository.getAllUsers();
    };
    // const findByEmail = (Email: string) => { return Repository.findByEmail(Email) }
    return {
        GetAllUsers
        // findByEmail
    };
};
exports.default = AllUsersReppo;
