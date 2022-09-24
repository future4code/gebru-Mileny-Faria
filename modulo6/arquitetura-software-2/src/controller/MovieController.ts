import { Request, Response } from 'express'
import { MovieBusiness } from '../business/MovieBusiness'

export class MovieController {

  async create(req: Request, res: Response): Promise<void> {
    try {
      const title = req.body.title
      const description = req.body.description
      const durationInMinutes = Number(req.body.durationInMinutes)
      const yearOfRelease = Number(req.body.yearOfRelease)

      const movieBusiness = new MovieBusiness()
      await movieBusiness.create({ title, description, durationInMinutes, yearOfRelease })

      res.status(201).send({ message: "Filme cadastrado com sucesso" })
    } catch (error: any) {
      res.status(400).send(error.message)
    }
  }
}
