import { Request, Response } from 'express'
import { UserBusiness } from '../business/UserBusiness'
import { createUserDTO } from '../model/UserDTO'

export class UserController {

    createUser = async (req: Request, res: Response): Promise<void> => {
        try {       
           const input: createUserDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
           }     

           const userBusiness = new UserBusiness()
           await userBusiness.createUser(input)

           res.status(201).send({message: "User created!"})
        } catch (error:any) {
           res.status(error.statuscode || 400).send(error.message || error.sqlMessage)
        }
    }
}