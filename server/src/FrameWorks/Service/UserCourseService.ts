

export const UserCorseService = () => {
    // eslint-disable-next-line no-console
    const addCourse = (data: object) => {
        // eslint-disable-next-line no-console
        console.log(data,"course service vannu");
        
        return data;
    };

    return {
        addCourse
    };

};

export type typeOfUserCourseService = typeof UserCorseService;