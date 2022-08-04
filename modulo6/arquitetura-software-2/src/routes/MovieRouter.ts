import express from 'express'
import { MovieController } from '../controller/MovieController'


export const MovieRouter = express.Router()

const movieController = new MovieController()

MovieRouter.post("/create", movieController.create )
