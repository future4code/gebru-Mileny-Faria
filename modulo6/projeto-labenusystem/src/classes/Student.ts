import { User } from './User'
import { Hobby } from './Hobby'

export class Student extends User {
    
    constructor (
        id: string,
        name: string,
        email: string,
        birthday: Date,
        classId: string,
        private hobby: Hobby[]
    ) {
        super(id, name, email, birthday, classId)
    }

    getHobby(): Hobby[] {
        return this.hobby
    }
}