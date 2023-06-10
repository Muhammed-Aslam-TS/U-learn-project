
import express,{Request,Response} from "express"; 
import AdminGetCourseController from "../../../../Adapters/AdminController/GetAllCourses";


const app = express.Router();

const Controller = AdminGetCourseController();


app.get("/allCourses",Controller.getCourses);

export default app;
