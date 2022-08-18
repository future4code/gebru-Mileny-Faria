import { connection } from '../data/connection'
import { Purchase } from '../types/types'

export const createPurchaseRepository = async (purchase: Purchase) => {
    try {
        return await connection('labecommerce_purchases').insert(purchase).into('labecommerce_purchases')

    } catch (error: any) {
        return error.message
        
    }
}

export const getAllPurchasesUserRepository = async (id: string) => {
    console.log(id)
    try {
        return await connection('labecommerce_purchases')
            .select(['labecommerce_purchases.quantity', 'labecommerce_purchases.total_price', 'labecommerce_products.name', 'labecommerce_products.price', 'labecommerce_products.image_url'])
            .innerJoin('labecommerce_users', 'labecommerce_users.id', 'labecommerce_purchases.user_id')
            .innerJoin('labecommerce_products', 'labecommerce_products.id', 'labecommerce_purchases.product_id')
        
    } catch (error: any) {
        return error.message
        
    }
}
