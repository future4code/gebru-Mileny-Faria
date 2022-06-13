import { Request, Response } from 'express'
import { users, USER_TYPE } from './data'

// a) por query, pois quando é busca é mais facil por query
// b) fiz a verificacao se o type ta vindo

export const getUsersType = (req: Request, res: Response) => {
    let errorCode = 500

    try {
        if(!users) {
            errorCode = 404
            throw new Error('Nenhum usuário cadastrado')
        }

        const type = req.query.type

        if(!type) {
            errorCode = 422
            throw new Error('Falta o parâmetro de busca')
        }

        if (type != USER_TYPE.NORMAL && type != USER_TYPE.ADMIN) {
            errorCode = 422
            throw new Error("Inserir query de type válido: 'NORMAL' ou 'ADMIN'")
          }

        const userType = users.filter(u => u.type === type)

        if(!userType.length) {
            errorCode = 404
            throw new Error('Tipo não encontrado')
        }

        res.status(200).send(userType)


    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
}

