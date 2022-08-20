import { BaseDatabase } from './BaseDatabase'
import { User } from '../models/User'

export class UserDatabase extends BaseDatabase {
  private static table_name = 'cookenu_users'

  insertUser = async (user: User): Promise<void> => {
    try {
        await UserDatabase.connection(UserDatabase.table_name).insert({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password
        })

    } catch (error: any) {
        throw new Error(error.sqlMessage || error.message)
    }
  }  
} 