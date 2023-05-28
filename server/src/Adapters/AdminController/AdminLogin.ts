/* eslint-disable no-console */
import { Request, Response } from "express";
import asyncHandler from "express-async-handler";

const admin = {
    Email: "admin@gmail.com",
    Password: "admin123"
};

const AdminController = () => {

    const AdminLogin = asyncHandler(async (req: Request, res: Response) => {
console.log(req.body,"body______________________");

        const { Email, Password } = req.body;

        if (admin.Email === Email && admin.Password === Password) {
            console.log("admin login success");

            const AdminData = {
                Email: admin.Email,
                Password: admin.Password,
                status: true,
                message: "admin exist"
            };
            res.status(200).json({ status: true, message: "admin exist", admin: AdminData });
        } else {
            console.log("login failure...................!");
            res.status(400).json({ status: false, message: "incorrect password" });
        }

    });




    return {
        AdminLogin,
    };
};


export default AdminController;
