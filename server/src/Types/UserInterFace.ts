export interface UserInterFace {
    Status: string;
    _id?: string;
    Fname?: string;
    Lname?: string;
    Email: string;
    Phone?: number
    CurrentPosition:string;
    Password: string;
    ConfirmPassword: string;
    walletAmount?:number
    blockStatus:boolean
    uid?:string;
    image?:string
}

export interface GoogleUserInterface {
    Status: string;
    uid?:string;
    userName?:string;
    email?:string;
    image?:string
}