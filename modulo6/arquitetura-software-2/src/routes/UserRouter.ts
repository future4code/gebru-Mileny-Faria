import express from 'express'
import { UserController } from '../controller/UserController'

export const UserRouter = express.Router()

const userController = new UserController()

UserRouter.get('/getAll', userController.getAllUsers)
UserRouter.post("/create", userController.create)

