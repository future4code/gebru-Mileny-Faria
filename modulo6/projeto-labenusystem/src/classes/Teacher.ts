import { User } from './User'

enum Specialties {
    JS = 'JS',
    CSS = 'CSS',
    REACT = 'REACT',
    TYPESCRIPT = 'TYPESCRIPT',
    POO = 'POO'
}

export class Teacher extends User {
    
    constructor (
        id: string,
        name: string,
        email: string,
        birthday: Date,
        classId: string,
        private specialties: Specialties
    ) {
        super(id, name, email, birthday, classId)
        this.specialties = specialties
     }

     getSpecialties(): Specialties {
        return this.specialties
     }

}