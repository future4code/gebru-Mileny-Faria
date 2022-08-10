import { POST_TYPES } from './Post'

export interface createPostDTO {
    photo: string,
    description: string,
    type: POST_TYPES,
    authorId: string
} 