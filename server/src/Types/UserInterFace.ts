export interface UserInterFace {
    _id?: string;
    Fname?: string;
    Lname?: string;
    Email: string;
    Phone: number;
    Password: string;
    ConfirmPassword: string;

}

export interface GoogleUserInterface {
    uid?:string;
    userName?:string;
    email?:string;
    image?:string
}