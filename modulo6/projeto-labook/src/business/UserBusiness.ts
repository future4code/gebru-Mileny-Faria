import { UserDatabase } from '../data/UserDatabase'
import { generateId } from '../services/generateId'
import { createUserDTO } from '../model/UserDTO'
import { InvalidRequest } from '../error/InvalidRequest'
import { InvalidEmail } from '../error/InvalidEmail'
import { InvalidName } from '../error/InvalidName'
import { InvalidPassword } from '../error/InvalidPassword'

export class UserBusiness {

    createUser = async (input: createUserDTO): Promise<void> => {
        try {
            const {name, email, password} = input

            // if (!email || !name || !password) {
            //     throw new InvalidRequest()
            // }
        
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
           await userDatabase.createUser({
                id,
                name,
                email,
                password 
           })

        } catch (error: any) {
            throw new Error(error.message || 'Error creating user. Please check your system administrator')
        }
    }
}