import { PostDatabase } from '../data/PostDatabase'
import { generateId } from '../services/generateId'
import { createPostDTO } from '../model/PostDTO'
import { InvalidRequest } from '../error/InvalidRequest'
import { InvalidType } from '../error/InvalidType'
import { InvalidId } from '../error/InvalidId'

export class PostBusiness {

    createPost = async (input: createPostDTO): Promise<void> => {
        try {
            const {photo, description, type, authorId} = input
        
            if(!photo || !description) {
                throw new InvalidRequest()
            }
        
            if(type !== "normal" && type !== "event") {
                throw new InvalidType()
            }

           const id = generateId()
           const createdAt = new Date()

           const postDatabase = new PostDatabase()
           await postDatabase.createPost({
            id, 
            photo,
            description,
            type,
            createdAt,
            authorId 
          })

        } catch (error: any) {
            throw new Error(error.message || 'Error creating user. Please check your system administrator')
        }
    }

    getPostById = async (postId: string) => {
        try {

            const postDataBase = new PostDatabase()
            const post = await postDataBase.getPostById(postId)

            if(!postId) {
                throw new InvalidId()
            }

            console.log(post)

            return post
            
        } catch (error: any) {
            throw new Error(error.message || 'Error')
        }
    }
}