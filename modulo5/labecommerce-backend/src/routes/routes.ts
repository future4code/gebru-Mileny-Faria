import { Router } from 'express'
import { createUserController, getAllUsersController } from '../controllers/users-controllers'
import { createProductController, getAllProductsController } from '../controllers/products-controllers'
import { createPurchaseController, getAllPurchasesUserController } from '../controllers/purchases-controllers'

export const router = Router()

router.get('/users', getAllUsersController)
router.post('/users', createUserController)
router.get('/products', getAllProductsController)
router.post('/products', createProductController)
router.get('/users/:user_id/purchases', getAllPurchasesUserController)
router.post('/purchases', createPurchaseController)
