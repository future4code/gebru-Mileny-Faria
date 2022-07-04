import { Router } from 'express'
import { createUserController, getAllUsersController } from '../controllers/users-controllers'

export const router = Router()

router.post('/users', createUserController)
router.get('/users', getAllUsersController)