// /* eslint-disable @typescript-eslint/no-empty-interface */
// export interface ServerToClientEvents {
//     receive_message:(data:any)=>void
// }


// export interface ClientToServerEvents {
//     join_room:(message:string)=>void,
//     send_message:(data:{message:string})=>string
// }


// export interface InterServerEvents {

// }

// export interface SocketData {
//     message:string
// }
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

