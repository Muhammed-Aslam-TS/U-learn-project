import { TypeOfCourseDb } from "./../../../FrameWorks/Database/MongoDb/Repositories/AddCoureseDb";
import { typeOfUserCourseServiceInterface } from "./../../Services/UserCourseServiceInterface";
import { CourseInterface } from "../../../Types/CourseFormInterface";


export const addCourse = async (
    imageUrl:string,
    CourseData: CourseInterface,
    coursDbRepo: ReturnType<TypeOfCourseDb>,
    CourseService: ReturnType<typeOfUserCourseServiceInterface>,
    
    
) => {
    const AddCourse = await coursDbRepo.addCourse(imageUrl,CourseData);

    return {
        AddCourse
    };
};