import { connection } from '../data/connection'
import { Product } from '../types/types'

export const createProductRepository = async (product: Product) => {
    try {
        return await connection('labecommerce_products').insert(product)

    } catch (error: any) {
        return error.message
        
    }
}

export const getAllProductsRepository = async () => {
    try {
        return await connection('labecommerce_products').select()
        
    } catch (error: any) {
        return error.message
        
    }
}

export const getProductPriceRepository = async (id: string) => {
    try {
        return await connection('labecommerce_products').select('price').where('id', id)
        
    } catch (error: any) {
        return error.message
        
    }
}
