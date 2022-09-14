import { v4 } from 'uuid'

export class IdGenerator {
  generateId = (): string => v4()
}

export default new IdGenerator()