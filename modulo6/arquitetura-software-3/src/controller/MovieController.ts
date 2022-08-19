import { Request, Response } from 'express'
import { MovieBusiness } from '../business/MovieBusiness'
import { createMovieDTO } from '../model/MovieDTO'

export class MovieController {

  async create(req: Request, res: Response): Promise<void> {
    try {
      const title = req.body.title
      const description = req.body.description
      const durationInMinutes = Number(req.body.durationInMinutes)
      const yearOfRelease = Number(req.body.yearOfRelease)

      const input: createMovieDTO = {
        title,
        description,
        durationInMinutes,
        yearOfRelease
      }

      const movieBusiness = new MovieBusiness()
      await movieBusiness.create(input)

      res.status(201).send({ message: "Filme cadastrado com sucesso" })
    } catch (error: any) {
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
    }
  }
}
