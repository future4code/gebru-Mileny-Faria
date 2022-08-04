import { CustomError } from './CustomError'

export class InvalidPassword extends CustomError {
    constructor(){
        super("Password must contain more than 6 characters", 400)
    }
}