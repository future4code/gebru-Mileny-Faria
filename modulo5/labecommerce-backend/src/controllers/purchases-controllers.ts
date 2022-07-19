import { Request, Response } from 'express'
import { v4 as generateId } from 'uuid'
import { getProductPriceRepository } from '../repositorys/products-repository'
import { createPurchaseRepository, getAllPurchasesUserRepository } from '../repositorys/purchases-repository'
import { Purchase } from '../types/types'

export const createPurchaseController = async (req: Request, res: Response) => {
    let errorCode = 500

    try {
        const { user_id, product_id, quantity } = req.body

        if (!user_id || !product_id || !quantity) {
            errorCode = 422
            throw new Error('Missing parameters to be passed in the body')
        }

        let total_price: number = 0
        const price = await getProductPriceRepository(product_id)
       
        if (price) {
            total_price = price.price * quantity
        } else {
            errorCode = 422
            throw new Error('The price request went wrong!')
        }

        const newPurchase: Purchase = {
            id: generateId(),
            user_id,
            product_id,
            quantity,
            total_price
        }

        await createPurchaseRepository(newPurchase)

        res.status(201).send('Purchase created successfully')
        
    } catch (error: any) {
        res.status(errorCode).send(error.message)
        
    }

}

export const getAllPurchasesUserController = async (req: Request, res: Response) => {
    let errorCode = 500

    const id = req.params.id

    try {
        const purchase = await getAllPurchasesUserRepository(id)

        if (!purchase.length) {
            throw new Error('There are no purchases for this user')
        }

        res.status(200).send(purchase)
        
    } catch (error: any) {
        res.status(errorCode).send(error.message)
        
    }
}