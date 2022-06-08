import { Request, Response } from 'express'
import { v4 as generateId } from 'uuid'
import { products } from './exercicio2/data'

export const postProduct = (req: Request, res: Response) => {
    try {
        const { name, price } = req.body

        if(!name) throw new Error('É necessario informar um nome para o produto')

        const newProduct = {
            id: generateId(),
            name,
            price
        }

        products.push(newProduct)
        res.status(201).send(products)

    } catch(error: any) {
        res.end(error.message)

    }
}