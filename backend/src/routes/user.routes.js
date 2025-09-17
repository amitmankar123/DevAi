import express from "express";
import * as userController from "../controller/user.controller.js"
import{body} from "express-validator"
import * as authMiddleware from "../middleware/auth.middleware.js";
const router = express.Router();


router.post("/register", 
    body("email").isEmail().withMessage(`email must be valid`),
    body('password').isLength({min:6}).withMessage("password must be atleat 6 char"),
    userController.createUserController )

    router.post("/login",
        body("email").isEmail().withMessage(`email must be valid`),
        body('password').isLength({min:6}).withMessage("password must be atleat 6 char"),

 userController.loginController

    )

    router.get("/profile" , authMiddleware.authUser, 
        userController.profileController
    )

    router.get("/logout", authMiddleware.authUser , userController.logoutController)

    router.get('/all', authMiddleware.authUser, userController.getAllUsersController);


export default router