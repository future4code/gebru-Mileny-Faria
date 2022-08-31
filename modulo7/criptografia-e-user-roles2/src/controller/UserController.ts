import { Request, Response } from 'express'
import { UserBusiness } from '../business/UserBusiness'
import { EditUserInputDTO, GetProfileDTO, LoginInputDTO, UserInputDTO } from '../model/user'

export class UserController {
  private userBusiness: UserBusiness
  constructor() {
    this.userBusiness = new UserBusiness()
  }

  signup = async (req: Request, res: Response) => {
    try {
      const { name, nickname, email, password, role } = req.body

      const input: UserInputDTO = {
        name,
        nickname,
        email,
        password,
        role
      }

      const token = await this.userBusiness.createUser(input)

      res.status(201).send({ message: "Usuário criado!", token })
    } catch (error: any) {
      res.status(400).send(error.message)
    }
  }   

  login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body

      const input: LoginInputDTO = {
        email,
        password
      }

      const token = await this.userBusiness.login(input)

      res.status(200).send({ message: "Usuário logado!", token })
    } catch (error: any) {
      res.status(400).send(error.message)
    }
  }

  getProfile = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string
      const input: GetProfileDTO = {
        id: req.params.id
      }

      const profile = await this.userBusiness.getProfile(input, token)

      res.status(201).send({ profile })
    } catch (error: any) {
      res.status(400).send(error.message)
    }
  }

  // editUser = async (req: Request, res: Response) => {
  //   try {
  //     const input: EditUserInputDTO = {
  //       name: req.body.name,
  //       nickname: req.body.nickname,
  //       id: req.params.id,
  //       token: req.headers.authorization as string
  //     }

  //     const userBusiness = new UserBusiness()
  //     console.log(input)
  //     await userBusiness.editUser(input)

  //     res.status(201).send({ message: "Usuário alterado!" })
  //   } catch (error: any) {
  //     res.status(400).send(error.message)
  //   }
  // }
}