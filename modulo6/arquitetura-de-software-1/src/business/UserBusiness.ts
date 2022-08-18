import { UserDatabase } from '../data/UserDatabase'
import { v4 as generateId } from 'uuid'
import { User } from '../types/user'

export class UserBusiness {

    createUser = async (input: any): Promise<void> => {
        try {
            const {name, email, password} = input
           
            if (!name || !email || !password) {
              throw new Error('Please fill all the fields')
            }

            if (email.indexOf("@") === -1) {
                throw new Error("Invalid Email")
            }

            if (password.length < 6) {
                throw new Error("Password must have at least 6 characters")
            }
     
           const id = generateId()

           const useDatabase = new UserDatabase()
           await useDatabase.createUser({
                id,
                name,
                email,
                password 
           })
                
        } catch (error: any) {
            throw new Error(error.message || 'Error creating user. Please check your system administrator')
        }
    }

    getAllUsers = async (): Promise<User[]> => {
        try {
            const users = new UserDatabase()

            if(!users) {
                throw new Error('User not found')
            }

            return await users.getAllUsers()

        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    deleteUser = async (input: {id: string}) => {
        try {
            if (!input.id) {
                throw new Error('Insert an Id')
            }

            const deleteUser = new UserDatabase()
            return await deleteUser.deleteUser(input.id)

        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}