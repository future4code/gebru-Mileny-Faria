import { MovieDatabase } from '../data/MovieDatabase'
import { generateId } from '../services/generateId'
import { createMovieDTO } from '../model/MovieDTO'
import { InvalidRequest } from '../error/InvalidRequest'

export class MovieBusiness {

  async create(input: createMovieDTO): Promise<void> {

    const { title, description, durationInMinutes, yearOfRelease } = input
    
    if (!title || !description || !durationInMinutes || !yearOfRelease) {
      throw new InvalidRequest()
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