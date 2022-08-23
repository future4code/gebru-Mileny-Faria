import * as jwt from 'jsonwebtoken'
import { AuthenticationData } from '../model/user'

class TokenGenerator {

    public generateToken = (payload: AuthenticationData) => {
        const token = jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            { expiresIn: "1h" }
         )
        return token 
    }

    public getTokenData = (token: string): AuthenticationData => {
        const result = jwt.verify(
            token,
            process.env.JWT_KEY as string
        ) as AuthenticationData

        return result
    }
}

export default new TokenGenerator()