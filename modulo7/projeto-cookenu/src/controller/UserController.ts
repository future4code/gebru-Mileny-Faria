import { Request, Response } from 'express'
import { UserBusiness } from '../business/UserBusiness'
import { SignupUserDTO, LoginInputDTO, GetProfileDTO, GetProfileByIdDTO, FriendsDTO } from '../models/User'


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

    getProfile = async (req: Request, res: Response): Promise<void> => {
        try {
            const input: GetProfileDTO = {
                token: req.headers.authorization!
            }

            const profile = await this.userBusiness.getProfile(input)

            res.status(201).send({profile})

        } catch (error: any) {
            res.status(400). send(error.message)
        }
    }

    getProfileById = async (req: Request, res: Response): Promise<void> => {
        try {
            const input: GetProfileByIdDTO = {
                id: req.params.id,
                token: req.headers.authorization!
            }

            const profile = await this.userBusiness.getProfileById(input)

            res.status(201).send(profile)
            
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }

    makeFriendship = async (req: Request, res: Response): Promise<void> => {
        try {
          const input: FriendsDTO = {
            friendId: req.body.friendId,
            token: req.headers.authorization!
          }
    
          await this.userBusiness.makeFriendship(input)
          res.status(201).send({ message: "You follow your friend now" })

        } catch (error: any) {
          res.status(400).send(error.message)
        }
    }

    unfriend = async (req: Request, res: Response): Promise<void> => {
        try {
          const input: FriendsDTO = {
            friendId: req.body.friendId,
            token: req.headers.authorization!
          }
    
          await this.userBusiness.unfriend(input)
          res.status(201).send({ message: "You unfollowed" })

        } catch (error: any) {
          res.status(400).send(error.message)
        }
    }
} 