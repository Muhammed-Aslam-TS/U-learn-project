import mongoose from "mongoose";
import validator from "validator";

const CourseSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    courseName: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        timestamps: true
    },
    CourseImage: {
        type: String,
        required: true,
    },
    Price: {
        type: Number,
        required: true
    },
    Category: {
        type: String,
        required: true,
    },
    discription: {
        type: String,
        required: true,
    },
    status: {
        tayp: String,
    },
    purtcherserId: {
        type: String
    },


});

const courseModel = mongoose.model("Course", CourseSchema);
export default courseModel;