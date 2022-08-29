import * as jwt from 'jsonwebtoken'
import { AuthenticationData } from '../models/User'

class Authorization {
    
    generateToken = (payload: AuthenticationData) => {
        const token = jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            { expiresIn: "1h" }
         )
        return token 
    }

    getTokenData = (token: string): AuthenticationData => {
        const result = jwt.verify(
            token,
            process.env.JWT_KEY as string
        ) as AuthenticationData

        return result
    }
} 

export default new Authorization()