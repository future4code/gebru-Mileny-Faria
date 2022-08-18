import { UserDatabase } from "../data/UserDatabase";
import { CustomError, InvalidEmail, InvalidName, InvalidPassword, UserNotFound } from "../error/customError";
import {
  UserInputDTO,
  user,
  EditUserInputDTO,
  EditUserInput,
  login,
  LoginInputDTO,
  GetProfileDTO,
} from "../model/user";
import { Authenticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";

const idGenerate = new GenerateId()
const authenticator = new Authenticator()

export class UserBusiness {
  public signup = async (input: UserInputDTO): Promise<string> => {
    try {
      const { name, nickname, email, password } = input

      if (!name || !nickname || !email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "name","nickname", "email" e "password"'
        )
      }

      if (name.length < 4) {
        throw new InvalidName()
      }

      if (!email.includes("@")) {
        throw new InvalidEmail()
      }

      if (password.length < 6) {
        throw new InvalidPassword()
      }

      const id: string = idGenerate.generateId()

      const user: user = {
        id,
        name,
        nickname,
        email,
        password
      }

      const userDatabase = new UserDatabase()
      await userDatabase.insertUser(user)

      const token = authenticator.generateToken({id})
      return token
    } catch (error: any) {
      throw new CustomError(400, error.message)
    }
  };

  public login = async (input: LoginInputDTO): Promise<string> => {
    try {
      const { email, password } = input

      if (!email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "email" e "password"'
        )
      }

      if (!email.includes("@")) {
        throw new InvalidEmail()
      }


      const userDatabase = new UserDatabase()
      const user = await userDatabase.findUserByEmail(email)

      if(!user) {
        throw new UserNotFound()
      }

      if(user.password !== password) {
        throw new InvalidPassword()
      }

      const token = authenticator.generateToken({id: user.id})
      return token
      
    } catch (error: any) {
      throw new CustomError(400, error.message)
    }
  }

  public editUser = async (input: EditUserInputDTO) => {
    try {
      const { name, nickname, id } = input;

      if (!name || !nickname || !id) {
        throw new CustomError(
          400,
          'Preencha os campos "id", "name" e "nickname"'
        );
      }

      if (name.length < 4) {
        throw new InvalidName();
      }

      const editUserInput: EditUserInput = {
        id,
        name,
        nickname,
      };

      const userDatabase = new UserDatabase();
      await userDatabase.editUser(editUserInput);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getProfile = async (input: GetProfileDTO) => {
    try {

      const { token } = input

      const { id } = authenticator.getTokenData(token)
     
      const userDatabase = new UserDatabase()
      const profile = await userDatabase.selectProfile(id)
      
      return profile
      
    } catch (error: any) {
      throw new CustomError(400, error.message)
    }
  };
}
