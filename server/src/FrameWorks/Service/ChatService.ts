

export const ChatService = () => {
    // eslint-disable-next-line no-console
    const StoreChat = (data: string) => {
        // eslint-disable-next-line no-console
        console.log(data,"course service vannu");
        
        return data;
    };

    return {
        StoreChat
    };

};

export type typeOfChatService = typeof ChatService;