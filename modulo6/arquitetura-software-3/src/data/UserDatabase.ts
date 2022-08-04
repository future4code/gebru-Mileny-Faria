import { User } from '../model/User'
import { BaseDatabase } from './BaseDatabase'

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = 'LABEFLIX_USER'

  async create({ id, name, email, password }: any): Promise<void> {
    await UserDatabase.connection(UserDatabase.TABLE_NAME).insert({ id, name, email, password })
  }

  async getAllUsers(): Promise<User[]> {
    const users: User[] = []
    const result = await UserDatabase.connection(UserDatabase.TABLE_NAME).select('*')

    for(let user of result) {
      users.push(user)
    }
    return users
  }
}
