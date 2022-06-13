import { Request, Response } from 'express'
import { users } from './data'

// a) metodo get
// b) com o /users

export const getUsers = (req: Request, res: Response) => {
    let errorCode = 500

    try {
        if(!users) {
            errorCode = 404
            throw new Error('Nenhum usuário cadastrado')
        }

        

       res.status(200).send(users)
        
    } catch (error: any) {
        res.status(errorCode).send(error.message)
        
    }
}
