import { CourseInterface } from "../../../../Types/CourseFormInterface";
import courseModel from "../Models/CorseModel";

export function CourseDatabase() {
    const addCourse = async (courseData: CourseInterface) => {
        const User = await courseModel.create(courseData);
        return User;
    };


    return {
        addCourse
    };
}

export type TypeOfCourseDb = typeof CourseDatabase