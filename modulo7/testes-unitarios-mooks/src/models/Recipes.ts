export type recipe = {
    id: string
    title: string
    preparationMode: string
    creationDate: Date
}

export interface CreateRecipeDTO {
    title: string
    preparationMode: string
    token: string
} 

export interface RecipeDTO {
    token: string
    id: string
}

export interface EditRecipeDTO {
    title: string
    preparationMode: string
    token: string
    id: string
}

export interface EditRecipe {
    id: string
    title: string
    preparationMode: string
}
  

