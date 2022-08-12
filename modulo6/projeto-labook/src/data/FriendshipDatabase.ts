import { BaseDatabase } from './BaseDatabase'
import { User } from '../model/User'

export class FriendshipDatabase extends BaseDatabase {
  private static table_name = 'labook_friendships'

  makeFriendship = async (friend1Id: string, friend2Id: string): Promise<void> => {
    try {
        await FriendshipDatabase.connection(FriendshipDatabase.table_name).insert({
          user1_id: friend1Id,
          user2_id: friend2Id
        })

    } catch (error: any) {
        throw new Error(error.sqlMessage || error.message)
    }
  }  
}