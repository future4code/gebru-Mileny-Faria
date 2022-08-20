import * as jwt from 'jsonwebtoken'
import { AuthenticationData } from '../models/Authentication'

export class TokenGenerator {
    
    generateToken = (id: string) => {
        const token = jwt.sign(
            { id },
            process.env.JWT_KEY as string,
            { expiresIn: "15m" }
         )
        return token 
    }

    tokenData = (token: string): AuthenticationData => {
        const payload = jwt.verify(
            token,
            process.env.JWT_KEY as string
        ) as jwt.JwtPayload

        return {id: payload.id as string}
    }
} 