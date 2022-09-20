import * as jwt from 'jsonwebtoken'

export interface AuthenticationData {
  id: string
  role: string
}


export class TokenGenerator {
  private static expiresIn: number = 1200

  generateToken = (input: AuthenticationData): string => {
    const newToken = jwt.sign(
      {
        id: input.id,
        role: input.role,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn: TokenGenerator.expiresIn,
      }
    )
    return newToken
  }

  verify = (token: string): AuthenticationData => {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as AuthenticationData
    const result = { id: payload.id, role: payload.role }
    return result
  }
}

export default new TokenGenerator()