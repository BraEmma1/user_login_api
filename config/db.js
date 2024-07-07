import mongoose, { Mongoose } from "mongoose";
import 'dotenv/config'

//Declare database connection
const dbString = process.env.mongo_url;


// create database connection
 export const dbConnection = () => {
    mongoose.connect(dbString).then(
        () => {
            console.log('Database is connected')
        });
};