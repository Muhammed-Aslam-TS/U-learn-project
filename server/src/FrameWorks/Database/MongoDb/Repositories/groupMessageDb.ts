
import MessageModels from "../Models/UserModel";

export function messageDatabase() {

    const createMessage = async (message: string) => {
        // eslint-disable-next-line no-console
        console.log(message, "vannu_____________________message");
        const createMessage = await MessageModels.create(message);
        return createMessage;
    };




    return {
        createMessage
    };
}
export type TypeOfMessageDb = typeof messageDatabase