import express,{Request,Response} from "express"; 
import AdminGetUserController from "../../../../Adapters/AdminController/GetAllUsers";


const app = express.Router();

const Controller = AdminGetUserController();


app.get("/allUsers",Controller.GetAllUsers);

export default app;
