import { Request, Response } from 'express'
import { users } from './data'


export const patchUser = (req: Request, res:Response) => {
    let errorCode = 500

    try{
        
        const id = Number(req.params.id)

        if(!id) {
            errorCode = 404
            throw new Error('Falta informar id no params')
        }

        const { name } = req.body

        if(!name) {
            errorCode = 422
            throw new Error('Falta parâmetro a ser passado no body')
        }

        const user = users.find(u => u.id === id)

        if(!user) {
            errorCode = 404
            throw new Error('Usuário não encontrado')
        }

        for (let i = 0; i < users.length; i++) {
            if(id === users[i].id) {
                users[i].name = `${name} -REALTERADO`
            }
        }

        res.status(202).send(user)

    } catch(error: any) {
        res.status(errorCode).send(error.message)
    }
}