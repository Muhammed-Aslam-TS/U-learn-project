import { TypeOfCourseDb } from '../../FrameWorks/Database/MongoDb/Repositories/AddCoureseDb';
import { CourseInterface } from '../../Types/CourseFormInterface';




const CourseReppo = (Repository: ReturnType<TypeOfCourseDb>) => {

    const addCourse = (CourseData: CourseInterface) => {
        // eslint-disable-next-line no-console
        console.log(CourseData,'reppoil vannu_____________________');
        
        return Repository.addCourse(CourseData)
    }

    // const findByEmail = (Email: string) => { return Repository.findByEmail(Email) }


    return {
        addCourse
        // findByEmail
    }
}

export default CourseReppo

export type typeOfCourseRepo = typeof CourseReppo