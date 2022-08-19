import { Request, Response } from 'express'
import { PostBusiness } from '../business/PostBusiness'
import { createPostDTO } from '../model/PostDTO'

export class PostController {

    createPost = async (req: Request, res: Response): Promise<void> => {
        try {       
           const input: createPostDTO = {
                photo: req.body.photo,
                description: req.body.description,
                type: req.body.type,
                authorId: req.body.authorId,
           }     

           const postBusiness = new PostBusiness()
           await postBusiness.createPost(input)

           res.status(201).send({message: "Post created!"})
        } catch (error: any) {
           res.status(error.statuscode || 400).send(error.message || error.sqlMessage)
        }
    }

    getPostById = async (req: Request, res: Response): Promise<void> => {
        try {
            const postId = req.params.id as string

            const postBusiness = new PostBusiness()
            const post = await postBusiness.getPostById(postId)

            res.status(201).send(post)
        } catch (error: any) {
            res.status(error.statuscode || 400).send(error.message || error.sqlMessage)
        }
    }
}