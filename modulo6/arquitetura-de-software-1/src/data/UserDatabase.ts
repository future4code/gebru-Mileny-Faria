import { BaseDatabase } from './BaseDatabase'
import { User } from '../types/user'

export class UserDatabase extends BaseDatabase {

   createUser = async (user: User): Promise<void> => {
      try {
        await UserDatabase.connection('User_Arq').insert({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password
        })

      } catch (error:any) {
         throw new Error(error.sqlMessage || error.message)
      }
   }

   getAllUsers = async (): Promise<User[]> => {
      try {
         const users: User[] = []
         const result = await UserDatabase.connection('User_Arq').select('*')

         for(let user of result) {
            users.push(user)
         }

         return users

      } catch (error: any) {
         throw new Error(error.sqlMessage || error.message)
      }
   }

   deleteUser = async (id: string): Promise<void> => {
      try {
         await UserDatabase.connection('User_Arq').where({id}).delete()

      } catch (error: any) {
         throw new Error(error.sqlMessage || error.message)
      }
   }
}