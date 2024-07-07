import { Router } from "express";
import { getUsers, signUp } from "../controllers/authController.js";

//create a router
export const userRouter = Router();

// Define routes
userRouter.post('/signup',signUp)

//Get Users
 userRouter.get('/users',getUsers)