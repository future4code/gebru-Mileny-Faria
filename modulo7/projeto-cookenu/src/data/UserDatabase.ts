import { BaseDatabase } from './BaseDatabase'
import { user, userProfile } from '../models/User'
import { CustomError } from '../error/CustomError'

export class UserDatabase extends BaseDatabase {
  private static table_name = 'cookenu_users'

  insertUser = async (user: user): Promise<void> => {
    try {
        await UserDatabase
        .connection(UserDatabase.table_name)
        .insert({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password
        })

    } catch (error: any) {
        throw new CustomError(400, error.sqlMessage)
    }
  }
  
  findUserByEmail = async (email: string): Promise<user> => {
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

  selectProfile = async (id: string): Promise<userProfile> => {
    try {
      const result = await UserDatabase
        .connection(UserDatabase.table_name)
        .select('id', 'name', 'email')
        .where('id', id)

      return result[0]

    } catch (error: any) {
      throw new CustomError(400, error.sqlMessage)
    }
  }
} 