import { CustomError } from './CustomError'

export class InvalidName extends CustomError {
    constructor(){
        super("Name too short, must be longer than 3 characters", 400)
    }
} 