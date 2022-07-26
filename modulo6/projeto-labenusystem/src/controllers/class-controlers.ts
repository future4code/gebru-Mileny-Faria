import { Request, Response } from 'express'
import { v4 as generateId } from 'uuid'
import { createClassRepository } from '../repositorys/class-repository'
import { Class } from '../classes/Class'

export const createClassController = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 500

    try {
        const { name, module } = req.body
        const id = generateId()

        if(!module) {
            let module = 0
        }

        if(!name) {
            errorCode = 422
            throw new Error('Missing parameters to be passed in the body')
        }

        if(module > 6 || module <= -1) {
            errorCode = 422
            throw new Error('There are only 6 modules(0-6)! Select a valid one.')
        }

        const newClass: Class = new Class(id, name, module) 

        await createClassRepository(newClass)

        res.status(201).send('Class created successfully')

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}