import { connection } from '../data/connection'
import { User } from '../types/types'

export const createUserRepository = async (user: User) => {
    try {
        return await connection('labecommerce_users').insert(user)

    } catch (error: any) {
        return error.message
        
    }
}

export const getAllUsersRepository = async () => {
    try {
        return await connection('labecommerce_users').select(['id', 'name', 'email'])
        
    } catch (error: any) {
        return error.message
        
    }
}
