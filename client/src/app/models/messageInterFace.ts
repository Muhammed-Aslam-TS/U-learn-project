

export interface User {
    id: string;
    name: string;
}

export interface Message {
    sender: User;
    receiver: User;
    content: string;
    timestamp: Date;
}

