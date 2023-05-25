import mongoose from "mongoose";
import validator from "validator";

const GoogleUserSchema = new mongoose.Schema({
    uid:{
        type: String,
        required: true,
    },
    userName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    }
});

const GoogleUserModel = mongoose.model("GoogleUsers", GoogleUserSchema);
export default GoogleUserModel;