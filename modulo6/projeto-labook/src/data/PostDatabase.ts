import { BaseDatabase } from './BaseDatabase'
import { Post } from '../model/Post'

export class PostDatabase extends BaseDatabase {
  private static table_name = 'labook_posts'

  createPost = async (post: Post): Promise<void> => {
    try {
        await PostDatabase.connection(PostDatabase.table_name).insert({
          id: post.id, 
          photo: post.photo,
          description: post.description,
          type: post.type,
          created_at: post.createdAt,
          author_id: post.authorId
        })

    } catch (error: any) {
        throw new Error(error.sqlMessage || error.message)
    }
  }
  
  getPostById = async (postId: string) => {
    try {
        return await PostDatabase.connection(PostDatabase.table_name).select().where('id', postId)
      
    } catch (error: any) {
        throw new Error(error.sqlMessage || error.message)
    }
  }
}