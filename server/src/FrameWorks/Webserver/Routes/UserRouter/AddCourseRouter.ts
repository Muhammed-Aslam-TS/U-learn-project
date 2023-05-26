
import express, { Request, Response } from "express";
import { UserCorseService } from "../../../Service/UserCourseService";
import { UserCourseServiceInterface } from "../../../../applications/Services/UserCourseServiceInterface";
import CourseController from "../../../../Adapters/Controller/CourseRegisterController";
import { CourseDatabase } from "../../../Database/MongoDb/Repositories/AddCoureseDb";
import CourseReppo from "../../../../applications/Repositories/CourseReppo";
import {upload} from "../../Middilewear/multer";
// const upload = multer({ dest: "uploads/" });



const app = express.Router();

const Controller = CourseController(
    CourseDatabase,
    CourseReppo,
    UserCorseService,
    UserCourseServiceInterface,
);

// app.post("/addCourse",Controller.addCourseDatails);
app.post("/addCourse",upload.single("courseImage"),Controller.addCourseDatails);





export default app;