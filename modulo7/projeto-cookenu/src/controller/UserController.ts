import { Request, Response } from 'express'
import { UserBusiness } from '../business/UserBusiness'
import { createUserDTO } from '../models/User'


export class UserController {
    private userBusiness: UserBusiness
    constructor() {
        this.userBusiness = new UserBusiness()
    }

    signup = async (req: Request, res: Response): Promise<void> => {
        try {       
            const input: createUserDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }     

           const token = await this.userBusiness.createUser(input)

           res.status(201).send({message: "User created!", token})

        } catch (error:any) {
           res.status(400).send(error.message)
        }
    }
} 