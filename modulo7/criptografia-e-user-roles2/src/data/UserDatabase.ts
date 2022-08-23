import { CustomError } from '../error/customError'
import { EditUserInput, user } from '../model/user'
import { BaseDatabase } from './BaseDatabase'

export class UserDatabase extends BaseDatabase {
  private static table_name = 'Auth_users'

  findUserByEmail = async (email: string): Promise<user> => {
    try {
      const result = await UserDatabase.connection(UserDatabase.table_name)
      .select()
      .where({email})

      return result[0]

    } catch (error: any) {
      throw new CustomError(400, error.message)
    }
  }

  insertUser = async (user: user) => {
    try {
      await UserDatabase.connection(UserDatabase.table_name)
        .insert({
          id: user.id,
          name: user.name,
          nickname: user.nickname,
          email: user.email,
          password: user.password,
        })

    } catch (error: any) {
      throw new CustomError(400, error.message)
    }
  }

  editUser = async (user: EditUserInput) => {
    try {
      await UserDatabase.connection
        .update({ name: user.name, nickname: user.nickname })
        .where({ id: user.id })
        .into(UserDatabase.table_name)

    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  }

  selectProfile = async (id: string) => {
    try {
      return await UserDatabase.connection(UserDatabase.table_name)
        .select()
        .where('id', id)

    } catch (error: any) {
      throw new CustomError(400, error.message)
    }
  }
}