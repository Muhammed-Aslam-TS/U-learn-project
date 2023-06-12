

import { TypeOfPaymentDb } from "../../FrameWorks/Database/MongoDb/Repositories/paymentDb";
import { PaymentInterface } from "../../Types/paymentInterFace";





const PaymentRepo = (Repository: ReturnType<TypeOfPaymentDb>) => {

    const paymentDetails = (paymentDetails: PaymentInterface) => { 
        return Repository.PaymentDetails(paymentDetails);
    };



    return {
        paymentDetails
    };
};

export default PaymentRepo;

export type typeOfPeymentRepo = typeof PaymentRepo