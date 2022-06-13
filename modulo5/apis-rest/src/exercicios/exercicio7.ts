import { Request, Response } from 'express'
import { users } from './data'


export const deleteUser = (req: Request, res:Response) => {
    let errorCode = 500

    try{
        
        const id = Number(req.params.id)

        if(!id) {
            errorCode = 404
            throw new Error('Falta informar id no params')
        }

        const user = users.map((u) => {
            if(u.id === id) {
                return {}
            }

            return u
        })

        if(!user) {
            errorCode = 404
            throw new Error('Usuário não encontrado')
        }

        
        res.status(202).send(users)

    } catch(error: any) {
        res.status(errorCode).send(error.message)
    }
}