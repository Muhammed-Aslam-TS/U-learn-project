import { typeOfUserCourseService } from "../../FrameWorks/Service/UserCourseService"
import { CourseInterface } from "../../Types/CourseFormInterface";


export const UserCourseServiceInterface = (Service: ReturnType<typeOfUserCourseService>) => {
    const AddCourse = (data:CourseInterface) => {
        return Service.addCourse(data);
    }

    return {
        AddCourse
    }
}


export type typeOfUserCourseServiceInterface = typeof UserCourseServiceInterface;