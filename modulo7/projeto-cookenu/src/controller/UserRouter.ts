import express from 'express'
import { UserController } from '../controller/UserController'

export const userRouter = express.Router()

const userController = new UserController()

userRouter.get('/profile', userController.getProfile)
userRouter.get('/profile/:id', userController.getProfileById)
userRouter.post('/signup', userController.signup)
userRouter.post('/login', userController.login)

