import { RecipeDatabase } from "../data/RecipeDatabase"
import { CustomError, Unauthorized } from "../error/CustomError"
import { CreateRecipeDTO, recipe } from "../models/Recipes"
import Authorization from "../services/Authorization"
import IdGenerator from "../services/IdGenerator"

export class RecipeBusiness {
    private recipeDatabase: RecipeDatabase
    constructor() {
        this.recipeDatabase = new RecipeDatabase()
    }

    createRecipe = async (input: CreateRecipeDTO): Promise<void> => {
        const { title, preparationMode, token } = input

        if(!title || !preparationMode || !token) {
            throw new CustomError(400, 'Fill in the title and preparate mode fields')
        }

        const data = Authorization.getTokenData(token)

        if(!data.id) {
            throw new Unauthorized()
        }

        const id: string = IdGenerator.generateId()
        const creationDate: Date = new Date()

        const recipe: recipe = {
            id, 
            title,
            preparationMode,
            creationDate
        }
        
        await this.recipeDatabase.insertRecipe(recipe)
    }
} 