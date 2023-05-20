import express, { Application } from "express";
import cors from 'cors'

import cookieParser from "cookie-parser";
import morgan from "morgan";
import compression from "compression";

import multer from "multer";

const upload = multer({dest: "uploads/"})



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

}


export default ExpressConfig

