export class Teacher {
    id: string
    name: string
    email: string
    birthday: Date
    classId: string
    specialties: string[]

    constructor(id: string, name: string, email: string, birthday: Date, classId: string, specialties: string[]) {
        this.id = id
        this.name = name
        this.email = email
        this.birthday = birthday
        this.classId = classId
        this.specialties = specialties
    }

}