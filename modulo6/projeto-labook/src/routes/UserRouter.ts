import express from 'express'
import { UserController } from '../controller/UserController'

export const UserRouter = express.Router()

const userController = new UserController()

UserRouter.post('/create', userController.createUser)
UserRouter.post('/makeFriends', userController.makeFriendship)
UserRouter.delete('/:id', userController.unfriend)