import { Router } from "express";
import { signUp } from "../controllers/authController.js";

//create a router
export const userRouter = Router();

// Define routes
userRouter.post('/signup',signUp)