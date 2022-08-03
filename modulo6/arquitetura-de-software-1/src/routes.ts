import { Router } from 'express'
import { UserController } from './controller/UserController'

export const router = Router()

const userController = new UserController()

router.get('/all', userController.getAllUsers)
router.post('/createUser', userController.createUser)
router.delete('/:id', userController.deleteUser)