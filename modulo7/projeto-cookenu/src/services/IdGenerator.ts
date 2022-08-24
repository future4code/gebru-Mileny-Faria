import { v4 } from 'uuid'

class IdGenerator {    
    generateId = () => v4() 
} 

export default new IdGenerator()