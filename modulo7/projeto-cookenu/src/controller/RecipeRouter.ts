import express from 'express'
import { RecipeController } from './RecipeController'

export const recipeRouter = express.Router()

const recipeController = new RecipeController()

recipeRouter.get('/:id', recipeController.getRecipe)
recipeRouter.post('/create', recipeController.createRecipe)
recipeRouter.put('/edit/:id', recipeController.editRecipe)
