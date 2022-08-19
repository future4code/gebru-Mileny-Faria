import { CustomError } from './CustomError'

export class InvalidType extends CustomError {
    constructor(){
        super("The type must be event or normal", 400)
    }
} 