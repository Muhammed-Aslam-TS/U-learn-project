import mongoose from 'mongoose'
import validator from "validator";

const CourseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    plan1: {
        type: Number,
        required: true,
    },
    plan2: {
        type: Number,
        required: true,
    },
    plan3: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
})

const courseModel = mongoose.model('Course', CourseSchema)
export default courseModel;