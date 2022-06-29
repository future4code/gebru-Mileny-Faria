import { connection } from '../data/connection'


 export const filterUserByNameRepository = async (name: string) => {

   try {
      return await connection('aula48_exercicio').where('name', 'like', `%${name}%`)

   } catch (error: any) {
      return error.message
   }
 }

 
 export const filterUserByTypeRepository = async (type: string) => {

   try {
      return await connection('aula48_exercicio').where('type', 'like', `%${type}%`)

   } catch (error: any) {
      return error.message
   }
 }

//  export const orderUserOrTypeRepository = async (type: string) => {

//    try {
//       return await connection('aula48_exercicio').where('type', 'like', `%${type}%`)

//    } catch (error: any) {
//       return error.message
//    }
//  }