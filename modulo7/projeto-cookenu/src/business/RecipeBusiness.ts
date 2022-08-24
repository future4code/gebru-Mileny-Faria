import { RecipeDatabase } from "../data/RecipeDatabase"
import { CustomError } from "../error/CustomError"
import { CreateRecipeDTO, recipe } from "../models/Recipes"
import IdGenerator from "../services/IdGenerator"

export class RecipeBusiness {
    private recipeDatabase: RecipeDatabase
    constructor() {
        this.recipeDatabase = new RecipeDatabase()
    }

    createRecipe = async (input: CreateRecipeDTO, token: string): Promise<void> => {
        const { title, preparationMode } = input

        if(!title || !preparationMode) {
            throw new CustomError(400, 'Fill in the title and description fields')
        }

        const id = IdGenerator.generateId()
        const creationDate = new Date()

        const recipe: recipe = {
            id, 
            title,
            preparationMode,
            creationDate
        }
        
        await this.recipeDatabase.insertRecipe(recipe)
     
    }
} 