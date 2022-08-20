export class CustomError extends Error {
    constructor(statusCode: number, message: string){
        super(message)
    }
}
export class InvalidEmail extends CustomError{ 
    constructor(){
        super(400, "Insert a valid email")
    }
}

export class InvalidName extends CustomError{ 
    constructor(){
        super(400, "The name must be longer than 3 characters")
    }
}

export class InvalidPassword extends CustomError{ 
    constructor(){
        super(400, "Email must be longer than 6 characters")
    }
}