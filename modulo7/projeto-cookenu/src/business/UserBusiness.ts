import { UserDatabase } from '../data/UserDatabase'
import { CustomError, InvalidEmail, InvalidName, InvalidPassword } from '../error/CustomError'
import { createUserDTO, User } from '../models/User'
import Authorization from '../services/Authorization'
import HashManager from '../services/HashManager'
import IdGenerator from '../services/IdGenerator'

export class UserBusiness {
    private userDatabase: UserDatabase
    constructor() {
        this.userDatabase = new UserDatabase()
    }

    createUser = async (input: createUserDTO): Promise<string> => {
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

           const id = IdGenerator.generateId()
           const hashPassword = await HashManager.generateHash(password)

           const user: User = {
                id, 
                name,
                email,
                password: hashPassword
           }
           
           await this.userDatabase.insertUser(user)
           const token = Authorization.generateToken(id)

           return token
    }
} 