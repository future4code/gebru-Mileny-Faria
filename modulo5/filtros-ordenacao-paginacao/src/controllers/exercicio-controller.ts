import { Request, Response } from 'express'
import { filterUserByNameRepository, filterUserByTypeRepository } from '../repositorys/exercicio-repository'

export const filterUserByNameController = async (req: Request, res: Response): Promise<void> => {
   let errorCode = 500 
   
   try {
      
      let name = req.query.name as string
      
      if(!name) {
         name = '%'
      }
      
      const users = await filterUserByNameRepository(name)
 
       if(!users.length){
          errorCode = 404
          throw new Error("No recipes found")
       }
 
       res.status(200).send(users)
       
    } catch (error: any) {
       res.status(errorCode).send(error.message)
    }
 }

 export const filterUserByTypeController = async (req: Request, res: Response): Promise<void> => {
   let errorCode = 500 
   
   try {
      
      let type = req.params.type as string
      
      if(!type) {
         type = '%'
      }
      
      const users = await filterUserByTypeRepository(type)
 
       if(!users.length){
          errorCode = 404
          throw new Error("No recipes found")
       }
 
       res.status(200).send(users)
       
    } catch (error: any) {
       res.status(errorCode).send(error.message)
    }
 }