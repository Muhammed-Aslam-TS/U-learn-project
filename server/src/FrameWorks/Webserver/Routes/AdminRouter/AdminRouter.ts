import express,{Request,Response} from "express"; 
import AdminController from "../../../../Adapters/AdminController/AdminLogin";


const app = express.Router();

const Controller = AdminController();

app.post("/adminLogin", Controller.AdminLogin); 
// app.post("/Signup", Controller.adminSignUp); 

export default app;
