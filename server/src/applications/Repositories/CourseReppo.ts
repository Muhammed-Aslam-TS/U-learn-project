import { TypeOfCourseDb } from "../../FrameWorks/Database/MongoDb/Repositories/AddCoureseDb";
import { CourseInterface } from "../../Types/CourseFormInterface";




const CourseReppo = (Repository: ReturnType<TypeOfCourseDb>) => {

    const addCourse = (imageUrl:string,CourseData: CourseInterface) => { 
        return Repository.addCourse(imageUrl,CourseData);
    };



    return {
        addCourse
    };
};

export default CourseReppo;

export type typeOfCourseRepo = typeof CourseReppo