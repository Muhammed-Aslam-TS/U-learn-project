import mongoose, { Schema } from "mongoose";

const paymentModel = new Schema({

    amount: {
        type: Number,
    },
    user: {
        type: Object
    },
    card: {
        type: Object
    },
    userId: {
        type: String
    },
    courseId: {
        type: String
    },
    date:{
        type:Date
    }

});

const PaymentModels = mongoose.model("PaymentDetails", paymentModel);
export default PaymentModels;