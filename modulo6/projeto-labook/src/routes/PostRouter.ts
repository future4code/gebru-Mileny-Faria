import express from 'express'
import { PostController } from '../controller/PostController'

export const PostRouter = express.Router()

const postController = new PostController()

PostRouter.get('/:id', postController.getPostById)
PostRouter.post('/create', postController.createPost)
