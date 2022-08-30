import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { EditUserInputDTO, GetProfileDTO, LoginInputDTO, UserInputDTO } from "../model/user";

export class UserController {

      public signup = async (req: Request, res: Response) => {
        try {
          const { name, nickname, email, password } = req.body
    
          const input: UserInputDTO = {
            name,
            nickname,
            email,
            password,
          }

          const userBusiness = new UserBusiness()
          const token = await userBusiness.signup(input)
    
          res.status(201).send({ message: "Usuário criado!", token })
        } catch (error: any) {
          res.status(400).send(error.message)
        }
      };   
      
      public login = async (req: Request, res: Response) => {
        try {
          const { email, password } = req.body
    
          const input: LoginInputDTO = {
            email,
            password
          }

          const userBusiness = new UserBusiness()
          const token = await userBusiness.login(input)
    
          res.status(201).send({ message: "Login efetuado com sucesso!", token })
        } catch (error: any) {
          res.status(400).send(error.message)
        }
      }; 

      public editUser = async (req: Request, res: Response) => {
        try {
          
          const input: EditUserInputDTO = {
            name: req.body.name,
            nickname: req.body.nickname,
            id: req.params.id
          };

          const userBusiness = new UserBusiness()
          userBusiness.editUser(input);
    
          res.status(201).send({ message: "Usuário alterado!" });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      }; 

      public getProfile = async (req: Request, res: Response) => {
        try {
    
          const input: GetProfileDTO = {
            token: req.headers.authorization as string
          }

          const userBusiness = new UserBusiness()
          const profile = await userBusiness.getProfile(input)
    
          res.status(201).send({ profile })
        } catch (error: any) {
          res.status(400).send(error.message)
        }
      };   
 



}
