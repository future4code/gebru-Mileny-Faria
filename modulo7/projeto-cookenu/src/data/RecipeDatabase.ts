import { BaseDatabase } from './BaseDatabase'
import { recipe } from '../models/Recipes'
import { CustomError } from '../error/CustomError'

export class RecipeDatabase extends BaseDatabase {
  private static table_name = 'cookenu_recipes'

  insertRecipe = async (recipe: recipe): Promise<void> => {
    try {
        await RecipeDatabase
        .connection(RecipeDatabase.table_name)
        .insert({
          id: recipe.id,
          title: recipe.title,
          preparation_mode: recipe.preparationMode,
          creation_date: recipe.creationDate
        })

    } catch (error: any) {
        throw new CustomError(400, error.sqlMessage)
    }
  }
} 