import { UserDatabase } from '../data/UserDatabase'
import { CustomError, InvalidEmail, InvalidName, InvalidPassword } from '../error/CustomError'
import { createUserDTO, User } from '../models/User'
import { HashManager } from '../services/HashManager'
import { IdGenerator } from '../services/IdGenerator'
import { TokenGenerator } from '../services/TokenGenerator'

const idGenerator = new IdGenerator()
const tokenGenerator = new TokenGenerator()
const userDatabase = new UserDatabase()
const hashManager = new HashManager()

export class UserBusiness {

    createUser = async (input: createUserDTO): Promise<string> => {
        try {
            const { name, email, password } = input

            if (!name || !email || !password) {
                throw new CustomError(400, 'Fill in the fields "name", "email" and "password"')
            }

            if(!email.includes("@")) {
                throw new InvalidEmail()
            }

            if(name.length < 3) {
                throw new InvalidName()
            }

            if(password.length < 6) {
                throw new InvalidPassword()
            }

           const id = idGenerator.generateId()

           const hashPassword = await hashManager.generateHash(password)

           const user: User = {
                id, 
                name,
                email,
                password: hashPassword
           }
           
           await userDatabase.insertUser(user)
           
           const token = tokenGenerator.generateToken(id)

           return token

        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }
} 