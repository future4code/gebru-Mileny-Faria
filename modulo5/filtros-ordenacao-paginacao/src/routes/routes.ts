import { Router } from 'express'
import { filterUserByNameController, filterUserByTypeController } from '../controllers/exercicio-controller'

export const router = Router()

router.get('/users', filterUserByNameController)
router.get('/users/:type', filterUserByTypeController)