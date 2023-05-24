import express, { Application } from "express";
import cors from 'cors'

import cookieParser from "cookie-parser";
import morgan from "morgan";
import compression from "compression";



// import multer from "multer";

// const upload = multer({ dest: "uploads/" })

// const Io = sockeIo(server)


const corsOption = {
  origin: "http://localhost:4200",
  methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'],
  credentials: true

}



const ExpressConfig = (app: Application) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }))
  app.use(cookieParser())
  app.use(morgan('dev'))
  app.use(express.static("public"))
  app.use(compression())
  app.use(cors(corsOption))



  // // Define the storage for uploaded files
  // const storage = multer.diskStorage({
  //   destination: (req, file, cb) => {
  //     cb(null, 'uploads/'); // Specify the destination folder for uploaded files
  //   },
  //   filename: (req, file, cb) => {
  //     cb(null, Date.now() + '-' + file.originalname); // Specify the file name
  //   }
  // });

  // // Create the multer instance with the defined storage
  // const upload = multer({ storage });




}





export default ExpressConfig

