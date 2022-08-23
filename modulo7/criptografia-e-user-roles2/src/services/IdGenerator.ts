import { v4 } from "uuid";

class IdGenerator {

    public generateId = () => v4() 
} 

export default new IdGenerator()