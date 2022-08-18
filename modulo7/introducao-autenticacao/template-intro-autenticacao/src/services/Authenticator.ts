import * as jwt from 'jsonwebtoken'
import { authenticator } from '../model/authenticator'

export class Authenticator {
    generateToken = (id: authenticator): string => {
        const token = jwt.sign(
            {
                id
            },
            process.env.JWT_KEY as string,
            {
                expiresIn: process.env.JWT_DURATION
            }
        )

        return token
    }
}