import express, { Application } from "express";
import cors from "cors";

import cookieParser from "cookie-parser";
import morgan from "morgan";
import compression from "compression";





// const Io = sockeIo(server)


const corsOption = {
  origin:[ "ulearn.shop","www.ulearn.shop"],
  methods: ["GET", "PUT", "PATCH", "POST", "DELETE"],
  credentials: true,
  // Access-Control-Allow-Origin: *

};



const ExpressConfig = (app: Application) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(morgan("dev"));
  app.use(express.static("public"));
  app.use(compression());
  app.use(cors(corsOption));
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "https://ulearn.shop");
    res.setHeader("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    next();
  });
};





export default ExpressConfig;

