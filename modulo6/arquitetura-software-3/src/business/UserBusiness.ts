import { UserDatabase } from '../data/UserDatabase'
import { generateId } from '../services/generateId'
import { User } from '../model/User'
import { createUserDTO } from '../model/UserDTO'
import { InvalidEmail } from '../error/InvalidEmail'
import { InvalidName } from '../error/InvalidName'
import { InvalidRequest } from '../error/InvalidRequest'
import { InvalidPassword } from '../error/InvalidPassword'
import { UserNotFound } from '../error/UserNotFound'

export class UserBusiness {

  async create(input: createUserDTO): Promise<void> {

    const { email, name, password } = input
    
    if (!email || !name || !password) {
      throw new InvalidRequest()
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


    const id = generateId()

    const userDatabase = new UserDatabase()
    await userDatabase.create({
      id,
      name,
      email,
      password
    })
  }

  async getAllUsers(): Promise<User[]> {
    
    const users = new UserDatabase()

    if(!users) {
        throw new UserNotFound()
    }

    return await users.getAllUsers()
  }
}