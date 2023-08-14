"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCourseServiceInterface = void 0;
const UserCourseServiceInterface = (Service) => {
    const AddCourse = (data) => {
        return Service.addCourse(data);
    };
    return {
        AddCourse
    };
};
exports.UserCourseServiceInterface = UserCourseServiceInterface;
