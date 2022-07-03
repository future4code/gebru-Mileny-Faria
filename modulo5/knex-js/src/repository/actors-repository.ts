import { connection } from '../data/connection'

export const getActorByIdRespository = async (id: string): Promise<any> => {
    const result  = await connection.raw(`
        SELECT * FROM actor WHERE id = '${id}'
    `)
    
    return result[0][0]
}