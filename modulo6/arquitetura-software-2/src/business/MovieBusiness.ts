import { MovieDatabase } from '../data/MovieDatabase'
import { v4 as generateId } from 'uuid'
import { Movie } from '../types/Movie'

export class MovieBusiness {

  async create({ title, description, durationInMinutes, yearOfRelease }: any): Promise<void> {
    
    if (!title || !description || !durationInMinutes || !yearOfRelease) {
      throw new Error("Dados inválidos")
    }

    const id = generateId()

    const movieDatabase = new MovieDatabase()
    await movieDatabase.create({
      id,
      title,
      description,
      durationInMinutes,
      yearOfRelease
    })
  }
}