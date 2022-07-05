import { connection } from '../data/connection'
import { Purchase } from '../types/types'

export const createPurchaseRepository = async (purchase: Purchase) => {
    try {
        return await connection('labecommerce_purchases').insert(purchase)

    } catch (error: any) {
        return error.message
        
    }
}

export const getAllPurchaseRepository = async (id: string) => {
    console.log(id)
    try {
        return await connection.raw(`
            SELECT * FROM labecommerce_purchases as purchases
            INNER JOIN labecommerce_users as users ON purchases.user_id = ${id}
            INNER JOIN labecommerce_products as products ON purchases.product_id = products.id
                
        `)
        
    } catch (error: any) {
        return error.message
        
    }
}
