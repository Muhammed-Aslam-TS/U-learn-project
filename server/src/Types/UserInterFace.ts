export interface UserInterFace {
    Status: string;
    _id?: string;
    Fname?: string;
    Lname?: string;
    Email: string;
    Phone: number;
    Password: string;
    ConfirmPassword: string;
    walletAmount:number


}

export interface GoogleUserInterface {
    Status: string;
    uid?:string;
    userName?:string;
    email?:string;
    image?:string
}