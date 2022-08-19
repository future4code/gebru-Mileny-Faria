import { UserDatabase } from '../data/UserDatabase'
import { generateId } from '../services/generateId'
import { createUserDTO, makeFriendsDTO, unfriendDTO } from '../model/UserDTO'
import { InvalidEmail } from '../error/InvalidEmail'
import { InvalidName } from '../error/InvalidName'
import { InvalidPassword } from '../error/InvalidPassword'
import { FriendshipDatabase } from '../data/FriendshipDatabase'

export class UserBusiness {

    createUser = async (input: createUserDTO): Promise<void> => {
        try {
            const {name, email, password} = input
        
            if(!email.includes("@")) {
                throw new InvalidEmail()
            }
        
            if(name.length < 3) {
                throw new InvalidName()
            }
        
            if(password.length < 6) {
                throw new InvalidPassword()
            }

           const id = generateId()

           const userDatabase = new UserDatabase()
           await userDatabase.createUser({
            id, 
            name,
            email,
            password
          })

        } catch (error: any) {
            throw new Error(error.message || 'Error creating user. Please check your system administrator')
        }
    }

    makeFriendship = async (input: makeFriendsDTO): Promise<void> => {
        try {
            const { friend1Id, friend2Id } = input

            const friendsDatabase = new FriendshipDatabase()
            await friendsDatabase.makeFriendship(friend1Id, friend2Id)

        } catch (error: any) {
            throw new Error(error.message || 'Error making friends. Please check system administrator')
        }
    }

    unfriend = async (input: unfriendDTO): Promise<void> => {
        try {
            const friendId: unfriendDTO = input

            const friendsDatabase = new FriendshipDatabase()
            await friendsDatabase.unfriend(friendId)

        } catch (error: any) {
            throw new Error(error.message || 'Error when unfriending. Please check system administrator')
        }
    }
}