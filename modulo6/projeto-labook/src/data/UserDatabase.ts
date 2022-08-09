import { BaseDatabase } from './BaseDatabase'
import { User } from '../model/User'

export class UserDatabase extends BaseDatabase {
  private static table_name = 'labook_users'

  createUser = async (user: User): Promise<void> => {
    try {
        await UserDatabase.connection(UserDatabase.table_name).insert(user)

    } catch (error: any) {
        throw new Error(error.sqlMessage || error.message)
    }
  }  
}