import { Request, Response } from 'express'
import { UserBusiness } from '../business/UserBusiness'
import { SignupUserDTO, LoginInputDTO, GetUserByIdDTO } from '../model/User'

export class UserController {

   private userBusiness: UserBusiness

    constructor() {
        this.userBusiness = new UserBusiness()
    }

    signup = async (req: Request, res: Response): Promise<void> => {
        try {       
            const input: SignupUserDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                role: req.body.role
            }     

           const token = await this.userBusiness.createUser(input)

           res.status(201).send({message: 'Created user!', token})

        } catch (error: any) {
           res.status(400).send(error.message)
        }
    }

    login = async (req: Request, res: Response): Promise<void> => {
        try {
            const { email, password } = req.body

            const input: LoginInputDTO = {
                email,
                password
            }

            const token = await this.userBusiness.login(input)

            res.status(200).send({message: 'Logged in user', token})

        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }

    getProfileById = async (req: Request, res: Response): Promise<void> => {
        try {
            const input: GetUserByIdDTO = {
                id: req.params.id,
                token: req.headers.authorization!
            }

            const profile = await this.userBusiness.getUserById(input)

            res.status(201).send(profile)
            
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
}

export default new UserController()