import { UserModel } from "../models/User.js";

//Add a user 

export const signUp = async (req, res, next) => {
    try {
        const addUser = await UserModel.create(req.body)
        res.status(201).json({
       user: addUser})
    }
catch (error) {
    next(error)
}}