import { BaseDatabase } from './BaseDatabase'
import { CustomError } from '../error/CustomError'
import { friendship } from '../models/User'

export class FriendsDatabase extends BaseDatabase {
  private static table_name = 'cookenu_friendships'

    makeFriendship = async (makeFriends: friendship): Promise<void> => {
        try {
            await FriendsDatabase
            .connection(FriendsDatabase.table_name)
            .insert({
                id: makeFriends.id,
                friend_id: makeFriends.friendId
            })
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage)
        }
    }

    unfriend = async (friendId: string): Promise<void> => {
        try {
            await FriendsDatabase
            .connection(FriendsDatabase.table_name)
            .where('friend_id', friendId)
            .del()
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage)
        }
    }
}