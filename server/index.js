import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import helmet from "helmet";

/* CONFIG */
dotenv.config()
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

/* MONGOOSE AND DATABASE SETUP*/
const PORT = process.env.PORT || 9000;
mongoose
    .connect(process.env.MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async()=>{
        app.listen(PORT,()=> console.log(`Database connected and Server up and running on Server Port ${PORT}`));
    })
    .catch((error)=>console.log(`${error} did not connect`));

