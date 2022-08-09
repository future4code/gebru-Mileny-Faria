import { CustomError } from './CustomError'

export class InvalidRequest extends CustomError {
    constructor(){
        super("Missing parameters to be passed in the body", 400)
    }
} 