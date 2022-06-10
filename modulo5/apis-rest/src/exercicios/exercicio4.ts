import { Request, Response } from 'express'
import { users, Users, USER_TYPE } from './data'


export const postUser = (req: Request, res:Response) => {
    let errorCode = 500

    try{
        const { name, email, type, age } = req.body

        if(!name || !email || !type || !age) {
            errorCode = 422
            throw new Error('Faltam parâmetros a serem passados pelo body')
        }

        if(type !== USER_TYPE.ADMIN && type !== USER_TYPE.NORMAL) {
            errorCode = 422
            throw new Error('Inserir type de usuário válido')
        }

        const newUser: Users = {
            id: users.length + 1,
            name,
            email,
            type,
            age
        }

        users.push(newUser)
        res.status(202).send(users)

    } catch(error: any) {
        res.status(errorCode).send(error.message)
    }
}