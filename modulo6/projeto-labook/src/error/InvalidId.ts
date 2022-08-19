import { CustomError } from './CustomError'

export class InvalidId extends CustomError {
    constructor(){
        super("It is necessary to pass a valid id", 400)
    }
} 