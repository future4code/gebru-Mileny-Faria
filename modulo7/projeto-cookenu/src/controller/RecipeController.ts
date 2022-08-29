import { Request, Response } from 'express'
import { RecipeBusiness } from '../business/RecipeBusiness'
import { CreateRecipeDTO, EditRecipeDTO, GetRecipeDTO } from '../models/Recipes'


export class RecipeController {
  private recipeBusiness: RecipeBusiness
  constructor() {
      this.recipeBusiness = new RecipeBusiness()
  }

  createRecipe = async (req: Request, res: Response): Promise<void> => {
    try {       
        const input: CreateRecipeDTO = {
            title: req.body.title,
            preparationMode: req.body.preparationMode,
            token: req.headers.authorization!
        }

        await this.recipeBusiness.createRecipe(input)

        res.status(201).send({message: 'Recipe created successfully!'})

    } catch (error: any) {
        res.status(400).send(error.message)
    }
  }

  getRecipe = async (req: Request, res: Response): Promise<void> => {
    try {
      const input: GetRecipeDTO = {
        token: req.headers.authorization!,
        id: req.params.id
      }

      const recipe = await this.recipeBusiness.getRecipe(input)

      res.status(201).send(recipe)
    } catch (error: any) {
      res.status(400).send(error.message)
    }
  }

  editRecipe = async (req: Request, res: Response): Promise<void> => {
    try {
      const input: EditRecipeDTO = {
        title: req.body.title,
        preparationMode: req.body.preparationMode,
        token: req.headers.authorization!,
        id: req.params.id
      }

      await this.recipeBusiness.editRecipe(input)

      res.status(201).send({message: 'Recipe changed successfully'})
    } catch (error: any) {
      res.status(400).send(error.message)
    }
  }
} 