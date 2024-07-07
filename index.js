import express from "express";
import 'dotenv/config'
import { userRouter } from "./routes/authRoutes.js";
import { dbConnection } from "./config/db.js";

//create a server
const app = express();

//connect Database
dbConnection();

//midddleware
app.use(express.json())
//Use Router
app.use(userRouter);



//listen to App
const PORT = process.env.PORT || 5050;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))