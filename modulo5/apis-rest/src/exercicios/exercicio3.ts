import { Request, Response } from 'express'
import { users } from './data'

// a) envios por query
// b) alterado

export const getUserName = (req: Request, res: Response) => {
    let errorCode = 500

    try {
        if(!users) {
            errorCode = 404
            throw new Error('Nenhum usuário cadastrado')
        }

        const name = req.query.name as string

        if(!name) {
            errorCode = 422
            throw new Error('Falta o parâmetro de busca')
        }

        const userName = users.filter(u => u.name.toLowerCase() === name.toLowerCase())

        
        if (!userName.length) {
            errorCode = 404
            throw new Error("Usuário não encontrado")
        }

        res.status(200).send(userName)
  
    } catch(error: any) {
        res.status(errorCode).send(error.message)
    }
}