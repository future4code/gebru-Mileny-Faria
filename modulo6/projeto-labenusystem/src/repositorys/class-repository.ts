import { connection } from '../data/connection'
import { Class } from '../classes/Class'


export const createClassRepository = async (classes: Class) => {
    try {
        return await connection('classes').insert(classes)
        
    } catch (error: any) {
        return error.message

    }
}