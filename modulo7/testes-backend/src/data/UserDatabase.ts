import { BaseDatabase } from './BaseDatabase'
import { user } from '../model/User'
import { CustomError } from '../errors/CustomError'

export class UserDatabase extends BaseDatabase {

   private static table_name = 'users'

   createUser = async (user: user): Promise<void> => {
      try {
         await UserDatabase
         .connection(UserDatabase.table_name)
         .insert({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            role: user.role
         })

      } catch (error: any) {
         throw new CustomError(400, error.sqlMessage)
      }
   }

   getUserByEmail = async (email: string): Promise<user> => {
      try {
         const result  = await UserDatabase
            .connection(UserDatabase.table_name)
            .select()
            .where({email})

         return result[0]

      } catch (error: any) {
         throw new CustomError(400, error.sqlMessage)
      }
   }

   getUserById = async (id: string): Promise<user | undefined> => {
      try {
         const result = await BaseDatabase
            .connection(UserDatabase.table_name)
            .select()
            .where('id', id)
         
         return result[0]

      } catch (error:any) {
         throw new CustomError(400, error.sqlMessage)
      }
   }

   getAllUsers = async (): Promise<user[]> => {
      try {
         const result = await BaseDatabase
            .connection(UserDatabase.table_name)
            .select()
           
         return result

      } catch (error:any) {
         throw new CustomError(400, error.sqlMessage)
      }
   }
}

export default new UserDatabase()