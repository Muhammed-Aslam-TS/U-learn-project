"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CourseReppo = (Repository) => {
    const addCourse = (imageUrl, CourseData) => {
        return Repository.addCourse(imageUrl, CourseData);
    };
    return {
        addCourse
    };
};
exports.default = CourseReppo;
