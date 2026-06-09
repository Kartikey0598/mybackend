// require("dotenv").config({path: "./.env"});

import dotenv from "dotenv";

import connectDatabase from "./db/index.js";

dotenv.config({ path: "./.env" });

connectDatabase();

/*
import express from "express";
const app = express();

;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("Error in connecting to database", error);
            throw error;
        })
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
     }

    catch(error){
        console.log("Error in connecting to database", error);
        throw error;
    }
}) () 
    */