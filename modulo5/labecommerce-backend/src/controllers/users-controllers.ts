import { Request, Response } from 'express'
import { v4 as generateId } from 'uuid'
import { createUserRepository, getAllUsersRepository } from '../repositorys/users-repository'
import { User } from '../types/types'

export const createUserController = async (req: Request, res: Response) => {
    let errorCode = 500

    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            errorCode = 422
            throw new Error('Missing parameters to be passed in the body')
        }

        const newUser: User = {
            id: generateId(),
            name,
            email,
            password
        }

        await createUserRepository(newUser)

        res.status(201).send('User created successfully')
        
    } catch (error: any) {
        res.status(errorCode).send(error.message)
        
    }

}

export const getAllUsersController = async (req: Request, res: Response) => {
    let errorCode = 500

    try {
        const users = await getAllUsersRepository()

        if (!users) {
            errorCode = 404
            throw new Error('Users not found')
        }

        res.status(200).send(users)
        
    } catch (error: any) {
        res.status(errorCode).send(error.message)
        
    }
}
