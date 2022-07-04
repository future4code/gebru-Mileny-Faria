import { Router } from 'express'
import { createUserController, getAllUsersController } from '../controllers/users-controllers'
import { createProductController, getAllProductsController } from '../controllers/products-controllers'

export const router = Router()

router.post('/users', createUserController)
router.get('/users', getAllUsersController)
router.post('/products', createProductController)
router.get('/products', getAllProductsController)