import { BaseDatabase } from './BaseDatabase'
import { Post } from '../model/Post'

export class PostDatabase extends BaseDatabase {
  private static table_name = 'labook_posts'

  createUser = async (post: Post): Promise<void> => {
    try {
        await PostDatabase.connection(PostDatabase.table_name).insert(post)

    } catch (error: any) {
        throw new Error(error.sqlMessage || error.message)
    }
  }  
}