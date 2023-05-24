
import express, { Request, Response } from 'express';
import { UserCorseService } from '../../../Service/UserCourseService';
import { UserCourseServiceInterface } from '../../../../applications/Services/UserCourseServiceInterface';
import CourseController from '../../../../Adapters/Controller/CourseRegisterController';
import { CourseDatabase } from '../../../Database/MongoDb/Repositories/AddCoureseDb';
import CourseReppo from '../../../../applications/Repositories/CourseReppo';




const app = express.Router()

const Controller = CourseController(
    CourseDatabase,
    CourseReppo,
    UserCorseService,
    UserCourseServiceInterface,
)

// app.post('/addCourse',upload.single('courseImage'),Controller.addCourseDatails)
// app.post('/textEditor',(req:Request,res:Response)=>{
//     // eslint-disable-next-line no-console
//     console.log(req.body);
    
// })
// Controller.textEditor



export default app