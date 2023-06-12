
import { PaymentInterface } from "../../../Types/paymentInterFace";
import { typeOfPeymentRepo } from "../../Repositories/paymentDbRepo";

export const PaymentDetails = async (
    PaymentDetails:PaymentInterface,
    PaymentRepo: ReturnType<typeOfPeymentRepo>,  
) => {
    const paymentDetails = await PaymentRepo.paymentDetails(PaymentDetails);

    return {
        paymentDetails
    };
};