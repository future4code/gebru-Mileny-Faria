import { UserDatabase } from '../data/UserDatabase'
import { CustomError,
  InvalidEmail,
  InvalidName,
  InvalidPassword,
  Unauthorized,
  UserNotFound
} from '../error/customError'
import {
  UserInputDTO,
  user,
  EditUserInputDTO,
  EditUserInput,
  LoginInputDTO,
  GetProfileDTO,
} from '../model/user'
import HashManager from '../services/HashManager'
import IdGenerator from '../services/IdGenerator'
import TokenGenerator from '../services/TokenGenerator'

export class UserBusiness {
  private userDatabase: UserDatabase
  constructor(){
    this.userDatabase = new UserDatabase()
  }

  createUser = async (input: UserInputDTO): Promise<string> => {
    const { name, nickname, email, password, role } = input

      if (!name || !nickname || !email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "name","nickname", "email" e "password"')
      }

      if (name.length < 4) {
        throw new InvalidName()
      }

      if (!email.includes("@")) {
        throw new InvalidEmail()
      }

      const id: string = IdGenerator.generateId()
      const hashPassword = await HashManager.generateHash(password)

      const user: user = {
        id,
        name,
        nickname,
        email,
        password: hashPassword,
        role
      }

      await this.userDatabase.insertUser(user)
      const token = TokenGenerator.generateToken({id, role})

      return token
  }

  // login = async (input: LoginInputDTO): Promise<string> => {
  //   const { email, password } = input

  //     if (!email || !password) {
  //       throw new CustomError(
  //         400,
  //         'Preencha os campos"email" e "password"'
  //       )
  //     }

  //     if (!email.includes("@")) {
  //       throw new InvalidEmail()
  //     }

  //     const user = await this.userDatabase.findUserByEmail(email)

  //     if (!user) {
  //       throw new UserNotFound()
  //     }

  //     const hashCompare = await HashManager.compareHash(password, user.password)

  //     if(!hashCompare){ 
  //       throw new InvalidPassword()
  //     }

  //     const token = TokenGenerator.generateToken()

  //     return token
  // }

  // editUser = async (input: EditUserInputDTO) => {
  //   const { name, nickname, id, token } = input

  //     if (!name || !nickname || !id || !token) {
  //       throw new CustomError(
  //         400,
  //         'Preencha os campos "id", "name", "nickname" e "token"'
  //       )
  //     }

  //     const data = tokenGenerator.tokenData(token)

  //     if(!data.id) {
  //       throw new Unauthorized()
  //     }

  //     if (name.length < 4) {
  //       throw new InvalidName()
  //     }

  //     const editUserInput: EditUserInput = {
  //       id,
  //       name,
  //       nickname,
  //     }

  //     const userDatabase = new UserDatabase()
  //     await userDatabase.editUser(editUserInput)
  // }

  // getProfile = async (input: GetProfileDTO) => {
  //   const { token } = input

  //   const { id } = tokenGenerator.tokenData(token)

  //   const userDatabase = new UserDatabase()
  //   const profile = await userDatabase.selectProfile(id)

  //   return profile
  // }
}