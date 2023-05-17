import { CourseInterface } from "../../../../Types/CourseFormInterface";
import courseModel from "../Models/CorseModel";

export function CourseDatabase() {
    const addCourse = async (courseData: CourseInterface) => {  
        // eslint-disable-next-line no-console
        console.log(courseData,'db yil vannu===================');
              
        const User = await courseModel.create(courseData)
        return User
    }

    // const findByEmail = async (Email: string) => {
    //     const Course: CourseInterface | null = await userModel.findOne({'Email':Email})
    //     return Course
    // }


    return {
        addCourse
    }
}

export type TypeOfCourseDb = typeof CourseDatabase