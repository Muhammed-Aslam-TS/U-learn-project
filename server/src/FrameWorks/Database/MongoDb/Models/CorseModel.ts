import mongoose from "mongoose";
import validator from "validator";

const CourseSchema = new mongoose.Schema({
    userId:{
        type : String,
        required:true
    },
    courseName: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    // image: {
    //     type: String,
    //     required: true,
    // },
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
    discription: {
        type: String,
        required: true,
  
    },
    Details1: {
        type: String,
        required: true,
    },
    Details2: {
        type: String,
        required: true,
    },
    Details3: {
        type: String,
        required: true,
    },
    Details4: {
        type: String,
        required: true,
    },
    Details5: {
        type: String,
        required: true,
    }
});

const courseModel = mongoose.model("Course", CourseSchema);
export default courseModel;