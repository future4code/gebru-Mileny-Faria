import { Router } from 'express'
import { createClassController } from '../controllers/class-controlers'

export const router = Router()

router.post('/classes', createClassController)