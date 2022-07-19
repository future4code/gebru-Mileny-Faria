export class Student {
    private id: string
    private name: string
    private email: string
    private birthday: Date
    private classId: string
    private hobbies: string[] = []

    constructor(id: string, name: string, email: string, birthday: Date, classId: string) {
        this.id = id
        this.name = name
        this.email = email
        this.birthday = birthday
        this.classId = classId
    }
}