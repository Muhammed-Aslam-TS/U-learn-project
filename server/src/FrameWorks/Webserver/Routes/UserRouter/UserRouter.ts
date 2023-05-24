import express,{Request,Response} from 'express';
import UserController from '../../../../Adapters/Controller/UserRegister';
import { UserDatabase } from '../../../Database/MongoDb/Repositories/UserDb';
import UserReppo from '../../../../applications/Repositories/UserReppo';
import { UserAuthService } from '../../../Service/UserAuthService';
import { UserAuthServiceInterFace } from '../../../../applications/Services/UserAuthserviceInterFacw';



const app = express.Router()

const Controller = UserController(
    UserDatabase,
    UserReppo,
    UserAuthService,
    UserAuthServiceInterFace,
)

app.post('/signup', Controller.DoSignup)
app.post('/login', Controller.DoLogin) 
app.post('/googleSignup', Controller.GoogleSignUp) 
// app.post('/googleSignup',(req:Request,res:Response)=>{
//     console.log(req.body,'ivde _________________ndoooo?');
    
// }) 

export default app
