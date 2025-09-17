import User from "../models/user.model.js";
import  * as userService from "../services/user.services.js";
import {validationResult} from "express-validator"
import redisClient from "../services/redis.services.js"
export const createUserController = async(req, res)=>{
    const error = validationResult(req);

    if(!error.isEmpty()){
        return res.status(400).json({error: error.array()})
    }

    try {
        const user = await userService.createUser(req.body);
        const token = await user.generateJWT();

        delete user._doc.password

        res.status(200).json({user, token});
    } catch (error) {
        res.status(400). send(error.message);
    }
}

export const loginController = async(req , res)=>{
    const error = validationResult(req);

    if(!error.isEmpty()){
        return res.status(400).json({error});
    }

    try {
        const {email , password} = req.body;
        const user = await User.findOne({email}).select("+password");
        
        if(!user){
          return  res.status(401).json({error:"invalid credentials"})
        }

        const isMatch = await user.validPassword(password);
        if(!isMatch){
            return res.status(400).json({error:"Invlid password"})
        }

        const token = await user.generateJWT();

        return res.status (200).json({user , token,message:"login sucessfull"})

        
    } catch (error) {
        console.log(error)
       return res.status(400).send(error.message);
       
    }


}

export const profileController =async (req, res)=>{
    //console.log(req.user);
  
   return res .status(200).json({
        user:req.user
    })

}

export const  logoutController = async(req, res)=>{
    try {
        
        const token = req.headers?.authorization.split(' ')[1];

        redisClient.set(token , 'logout', 'EX', 60*60*24);

        res.status(200).json({
            message:"Logout successfully"
        })
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
        
    }
}

export const getAllUsersController = async (req, res) => {
    try {

        const loggedInUser = await User.findOne({
            email: req.user.email
        })

        const allUsers = await userService.getAllUsers({ userId: loggedInUser._id });

        return res.status(200).json({
            users: allUsers
        })

    } catch (err) {

        console.log(err)

        res.status(400).json({ error: err.message })

    }
}