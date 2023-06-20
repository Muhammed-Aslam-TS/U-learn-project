"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCorseService = void 0;
const UserCorseService = () => {
    // eslint-disable-next-line no-console
    const addCourse = (data) => {
        // eslint-disable-next-line no-console
        console.log(data, "course service vannu");
        return data;
    };
    return {
        addCourse
    };
};
exports.UserCorseService = UserCorseService;
