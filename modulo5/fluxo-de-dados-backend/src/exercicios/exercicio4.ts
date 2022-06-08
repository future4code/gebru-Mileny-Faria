import { Request, Response } from 'express'
import { products } from './exercicio2/data'

export const getProducts = (req: Request, res: Response) => {
    try {
        if(!products) throw new Error('Nenhum produto cadastrado')
        res.status(200).send(products)
        
    } catch(error: any) {
        res.end(error.message)

    }
}