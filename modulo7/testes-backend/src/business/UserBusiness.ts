import { UserDatabase } from '../data/UserDatabase'
import { CustomError, InvalidEmail, InvalidName, InvalidPassword, Unauthorized, UserNotFound } from '../errors/CustomError'
import { AuthenticationData, GetUserByIdDTO, LoginInputDTO, SignupUserDTO, user, userById } from '../model/User'
import Authorization from '../services/tokenGenerator'
import HashManager from '../services/hashGenerator'
import IdGenerator from '../services/idGenerator'

export class UserBusiness {
   private userDatabase: UserDatabase

   constructor() {
      this.userDatabase = new UserDatabase()
  }
   
   createUser = async (input: SignupUserDTO): Promise<string> => {
      const { name, email, password, role } = input

      if(!name || !email || !password) {
          throw new CustomError(400, 'Fill in the name, email and password fields')
      }

      if(!email.includes('@')) {
          throw new InvalidEmail()
      }

      if(name.length < 3) {
          throw new InvalidName()
      }

      if(password.length < 6) {
          throw new InvalidPassword()
      }

      const id: string = IdGenerator.generateId()
      const hashPassword = await HashManager.generateHash(password)

      const user: user = {
          id, 
          name,
          email,
          password: hashPassword,
          role
      }
      
      await this.userDatabase.createUser(user)
      const token = Authorization.generateToken({id, role})

      return token
  }

  login = async (input: LoginInputDTO): Promise<string> => {
      const { email, password } = input

      if(!email || !password) {
         throw new CustomError(400, 'Fill in the email and password fields')
      }

      if(!email.includes('@')) {
         throw new InvalidEmail()
      }

      const user = await this.userDatabase.getUserByEmail(email)

      if(!user) {
         throw new UserNotFound()
      }

      const hashCompare = await HashManager.compareHash(password, user.password)

      if(!hashCompare) {
         throw new InvalidPassword()
      }

      const payload: AuthenticationData = {
         id: user.id,
         role: user.role
      }

      const token = Authorization.generateToken(payload)

      return token
   }

   getUserById = async (input: GetUserByIdDTO): Promise<userById> => {
      const { id, token } = input

      if (!id || !token) {
         throw new CustomError(400, 'Fill in the id and token fields')
      }

      const data = Authorization.verify(token)

      if (!data.id) {
         throw new Unauthorized()
      }

      const user = await this.userDatabase.getUserById(id)
      
      return user
   }
}

export default new UserBusiness()