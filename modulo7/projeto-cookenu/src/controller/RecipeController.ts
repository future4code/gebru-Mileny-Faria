import { Request, Response } from 'express'
import { RecipeBusiness } from '../business/RecipeBusiness'
import { CreateRecipeDTO } from '../models/Recipes'


export class RecipeController {
    private recipeBusiness: RecipeBusiness
    constructor() {
        this.recipeBusiness = new RecipeBusiness()
    }

    create = async (req: Request, res: Response): Promise<void> => {
        try {       
            const input: CreateRecipeDTO = {
                title: req.body.title,
                preparationMode: req.body.preparationMode
            }
            
            const token: string = req.headers.authorization!

           await this.recipeBusiness.createRecipe(input, token)

           res.status(201).send({message: 'Recipe created successfully!'})

        } catch (error: any) {
           res.status(400).send(error.message)
        }
    }
} 