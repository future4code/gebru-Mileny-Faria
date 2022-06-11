import { Request, Response } from 'express'
import { users, Account } from '../data'

export const registerUser = (req: Request, res: Response) => {
    let errorCode = 500

    try {
        
        const { name, cpf, birth_date } = req.body

        if(!name || !cpf || !birth_date) {
            errorCode = 422
            throw new Error('Faltam parâmetros a serem passados pelo body')
        }

        const newUser: Account = {
            name,
            cpf,
            birth_date,
            balance: 0,
            extract: []
        }

        users.push(newUser)

        res.status(202).send(users)
        
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}

export const showUsers = (req: Request, res: Response) => {
    let errorCode = 500

    try {

        if(!users) {
            errorCode = 404
            throw new Error('Nenhum usuário encontrado')
        }

        res.status(200).send(users)
        
    } catch (error: any) {
        res.status(errorCode).send(error.message)

    }
}