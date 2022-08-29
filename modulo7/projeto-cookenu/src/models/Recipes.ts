export type recipe = {
    id: string,
    title: string,
    preparationMode: string,
    creationDate: Date
}

export interface CreateRecipeDTO {
    title: string,
    preparationMode: string,
    token: string
} 

export interface GetRecipeDTO {
    token: string;
    id: string;
  }

