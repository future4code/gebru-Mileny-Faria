import { Request, Response } from 'express'
import { v4 as generateId } from 'uuid'
import { createProductRepository, getAllProductsRepository } from '../repositorys/products-repository'
import { Product } from '../types/types'

export const createProductController = async (req: Request, res: Response) => {
    let errorCode = 500

    try {
        const { name, price, image_url } = req.body

        if (!name || !price || !image_url) {
            errorCode = 422
            throw new Error('Missing parameters to be passed in the body')
        }

        const newProduct: Product = {
            id: generateId(),
            name,
            price,
            image_url
        }

        await createProductRepository(newProduct)

        res.status(201).send('Product created successfully')
        
    } catch (error: any) {
        res.status(errorCode).send(error.message)
        
    }

}

export const getAllProductsController = async (req: Request, res: Response) => {
    let errorCode = 500

    try {
        const products = await getAllProductsRepository()

        if (!products.length) {
            throw new Error('There are no registered products')
        }

        res.status(200).send(products)
        
    } catch (error: any) {
        res.status(errorCode).send(error.message)
        
    }
}
