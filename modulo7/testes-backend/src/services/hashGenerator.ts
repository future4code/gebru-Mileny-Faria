import bcrypt from 'bcryptjs'

export class HashGenerator {
   generateHash = async (s: string): Promise<string> => {
      const rounds: number = Number(process.env.BCRYPT_COST)
      const salt = await bcrypt.genSalt(rounds)
      const result = await bcrypt.hash(s, salt)
      return result
   }

   compareHash = async (s: string, hash: string): Promise<boolean> => {
      return bcrypt.compare(s, hash)
   }
}

export default new HashGenerator()