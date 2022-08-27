import { UserDatabase } from '../data/UserDatabase'
import { CustomError, InvalidEmail, InvalidName, InvalidPassword, Unauthorized, UserNotFound } from '../error/CustomError'
import { GetProfileByIdDTO, GetProfileDTO, LoginInputDTO, SignupUserDTO, user, userProfile } from '../models/User'
import Authorization from '../services/Authorization'
import HashManager from '../services/HashManager'
import IdGenerator from '../services/IdGenerator'

export class UserBusiness {
    private userDatabase: UserDatabase
    constructor() {
        this.userDatabase = new UserDatabase()
    }

    createUser = async (input: SignupUserDTO): Promise<string> => {
        const { name, email, password } = input

        if(!name || !email || !password) {
            throw new CustomError(400, 'Fill in the name, email and password fields')
        }

        if(!email.includes('@')) {
            throw new InvalidEmail()
        }

        if(name.length < 3) {
            throw new InvalidName()
        }

        if(password.length < 6) {
            throw new InvalidPassword()
        }

        const id = IdGenerator.generateId()
        const hashPassword = await HashManager.generateHash(password)

        const user: user = {
            id, 
            name,
            email,
            password: hashPassword
        }
        
        await this.userDatabase.insertUser(user)
        const token = Authorization.generateToken(id)

        return token
    }

    login = async (input: LoginInputDTO): Promise<string> => {
        const { email, password } = input

        if(!email || !password) {
            throw new CustomError(400, 'Fill in the email and password fields')
        }

        if(!email.includes('@')) {
            throw new InvalidEmail()
        }

        const user = await this.userDatabase.findUserByEmail(email)

        if(!user) {
            throw new UserNotFound()
        }

        const hashCompare = await HashManager.compareHash(password, user.password)

        if(!hashCompare) {
            throw new InvalidPassword()
        }

        const id: string = user.id

        const token = Authorization.generateToken(id)

        return token
    }

    getProfile = async (input: GetProfileDTO): Promise<userProfile> => {
        const { token } = input

        if (!token) {
            throw new CustomError(400, 'Fill in the token fields')
        }

        const { id } = Authorization.getTokenData(token)

        const profile = await this.userDatabase.selectProfile(id)

        return profile
    }

    getProfileById = async (input: GetProfileByIdDTO): Promise<userProfile> => {
        const { id, token } = input

        if (!id || !token) {
            throw new CustomError(400, 'Fill in the id and token fields')
        }

        const data = Authorization.getTokenData(token)

        if(!data.id) {
            throw new Unauthorized()
        }

        const profile = await this.userDatabase.selectProfile(id)

        return profile
    }
} 