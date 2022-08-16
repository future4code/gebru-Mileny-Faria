import { BaseDatabase } from './BaseDatabase'
import { unfriendDTO } from '../model/UserDTO'

export class FriendshipDatabase extends BaseDatabase {
  private static table_name = 'labook_friendships'

  makeFriendship = async (friend1Id: string, friend2Id: string): Promise<void> => {
    try {
        await FriendshipDatabase
          .connection(FriendshipDatabase.table_name)
          .insert({user1_id: friend1Id, user2_id: friend2Id})

    } catch (error: any) {
        throw new Error(error.sqlMessage || error.message)
    }
  }
  
  unfriend = async (friendId: unfriendDTO): Promise<void> => {
    try {
        await FriendshipDatabase
          .connection(FriendshipDatabase.table_name)
          .where('user2_id', friendId)
          .del()

    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }
}