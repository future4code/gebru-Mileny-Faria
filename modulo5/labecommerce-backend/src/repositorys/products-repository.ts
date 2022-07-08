import { connection } from '../data/connection'
import { Product } from '../types/types'

export const createProductRepository = async (product: Product) => {
    try {
        return await connection('labecommerce_products').insert(product)

    } catch (error: any) {
        return error.message
        
    }
}

export const getAllProductsRepository = async (search: string, sort: string, order: string) => {
    try {
        return await connection('labecommerce_products')
            .where('name', 'like', `%${search}%`)
            .orderBy(sort, order)
        
    } catch (error: any) {
        return error.message
        
    }
}

export const getProductPriceRepository = async (id: string) => {
    try {
        const price = await connection('labecommerce_products').select('price').where('id', id)

        return price[0]
        
    } catch (error: any) {
        return error.message
        
    }
}
