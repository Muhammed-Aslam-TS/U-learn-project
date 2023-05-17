import { TypeOfCourseDb } from './../../../FrameWorks/Database/MongoDb/Repositories/AddCoureseDb';
import { typeOfUserCourseServiceInterface } from './../../Services/UserCourseServiceInterface';
import { CourseInterface } from "../../../Types/CourseFormInterface";


export const addCourse = async (
    CourseData: CourseInterface,
    coursDbRepo: ReturnType<TypeOfCourseDb>,
    CourseService: ReturnType<typeOfUserCourseServiceInterface>
) => {
    // eslint-disable-next-line no-console
    console.log(CourseData,'uthcas vvvvvvvvvvvvvvvvvvvvvvvvvvnnu+++++++++++');
    
    const AddCourse = await coursDbRepo.addCourse(CourseData);

    return {
        AddCourse
    };
}