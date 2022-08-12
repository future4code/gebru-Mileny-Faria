import { Request, Response } from 'express'
import { UserBusiness } from '../business/UserBusiness'
import { createUserDTO, makeFriendsDTO } from '../model/UserDTO'

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

    makeFriendship = async (req: Request, res: Response): Promise<void> => {
        try {
            const input: makeFriendsDTO =  {
                friend1Id: req.body.friend1Id,
                friend2Id: req.body.friend2Id
            }

            const friendsBusiness = new UserBusiness()
            await friendsBusiness.makeFriendship(input)

            res.status(201).send({message: "You are friends now"})

        } catch (error: any) {
            res.status(error.statuscode || 400).send(error.message || error.sqlMessage)
        }
    }
}