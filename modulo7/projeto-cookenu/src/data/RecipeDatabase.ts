import { BaseDatabase } from './BaseDatabase'
import { EditRecipe, recipe } from '../models/Recipes'
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

  selectRecipe = async (id: string): Promise<recipe> => {
    try {
      const result = await RecipeDatabase
        .connection(RecipeDatabase.table_name)
        .select()
        .where('id', id)

      return result[0]

    } catch (error: any) {
      throw new CustomError(400, error.sqlMessage)
    }
  }

  editRecipe = async (recipeEdit: EditRecipe): Promise<void> => {
    try {
      await RecipeDatabase
        .connection(RecipeDatabase.table_name)
        .update({title: recipeEdit.title, preparation_mode: recipeEdit.preparationMode})
        .where({id: recipeEdit.id})

    } catch (error: any) {
      throw new CustomError(400, error.sqlMessage)
    }
  }
} 