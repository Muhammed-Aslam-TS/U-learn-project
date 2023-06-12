import { PaymentInterface } from "../../../../Types/paymentInterFace";
import PaymentModels from "../Models/paymentModel";





export function paymentDatabase() {

    const PaymentDetails = async (paymentDetails:PaymentInterface) => {
        const PaymentDb = await PaymentModels.create(paymentDetails);
        
        return PaymentDb;
    };




    return {
        PaymentDetails
    };
}
export type TypeOfPaymentDb = typeof paymentDatabase