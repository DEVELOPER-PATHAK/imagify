import express from 'express'
import { loginUser, paymentRazorpay, registerUser,userCredits, verifyRazorpay } from '../controllers/userController.js';
// import { userCredits } from '../controllers/userController.js';
import userAuth from '../middlewares/auth.js';
// import {userAuth} from '../middlewares/auth.js';
// import {registerUser, loginUser} from '../controllers/userController.js'

const userRouter = express.Router();

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/credits',userAuth ,userCredits)
userRouter.post('/pay-razor',userAuth ,paymentRazorpay)
userRouter.post('/verify-razor',verifyRazorpay)

export default userRouter;