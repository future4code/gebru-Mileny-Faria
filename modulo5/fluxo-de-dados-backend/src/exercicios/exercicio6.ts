import { Request, Response } from 'express'
import { products } from './exercicio2/data'

export const deleteProduct = (req: Request, res: Response) => {
    try {
        const prodId = req.params.id
        if(!prodId) throw new Error('Id do produto é obrigatório!')

        for (let i = 0; i < products.length; i++) {
            if (products[i].id === prodId) {
                products.splice(i, 1)
            }
        }
        
        res.status(201).send(products)

    } catch(error: any) {
        res.end(error.message)

    }
}