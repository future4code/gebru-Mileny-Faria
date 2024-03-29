import { FriendsDatabase } from '../data/FriendsDatabase'
import { UserDatabase } from '../data/UserDatabase'
import { CustomError, InvalidEmail, InvalidName, InvalidPassword, Unauthorized, UserNotFound } from '../error/CustomError'
import { AuthenticationData, FriendsDTO, friendship, GetProfileByIdDTO, GetProfileDTO, LoginInputDTO, SignupUserDTO, user, userProfile } from '../models/User'
import Authorization from '../services/Authorization'
import HashManager from '../services/HashManager'
import IdGenerator from '../services/IdGenerator'

export class UserBusiness {
    private userDatabase: UserDatabase
    private friendsDatabase: FriendsDatabase

    constructor() {
        this.userDatabase = new UserDatabase()
        this.friendsDatabase = new FriendsDatabase()
    }

    createUser = async (input: SignupUserDTO): Promise<string> => {
        const { name, email, password, role } = input

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

        const id: string = IdGenerator.generateId()
        const hashPassword = await HashManager.generateHash(password)

        const user: user = {
            id, 
            name,
            email,
            password: hashPassword,
            role
        }
        
        await this.userDatabase.insertUser(user)
        const token = Authorization.generateToken({id, role})

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

        const payload: AuthenticationData = {
            id: user.id,
            role: user.role
        }

        const token = Authorization.generateToken(payload)

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

    makeFriendship = async (input: FriendsDTO): Promise<void> => {
        const { friendId, token } = input
    
        if (!friendId || !token) {
          throw new CustomError(400, 'Fill in the email and password fields')
        }
    
        const data = Authorization.getTokenData(token)
    
        if (!data.id) {
          throw new Unauthorized()
        }

        const id: string = IdGenerator.generateId()
       
        const makeFriends: friendship = {
            id, 
            friendId
        }
    
        await this.friendsDatabase.makeFriendship(makeFriends)
    }

    unfriend = async (input: FriendsDTO): Promise<void> => {
        const { friendId, token } = input
    
        if (!friendId || !token) {
          throw new CustomError(400, 'Fill in the email and password fields')
        }
    
        const data = Authorization.getTokenData(token)
    
        if (!data.id) {
          throw new Unauthorized()
        }
    
        this.friendsDatabase.unfriend(friendId)
    }
} 