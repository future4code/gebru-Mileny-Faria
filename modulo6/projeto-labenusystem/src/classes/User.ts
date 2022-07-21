export class User {

    constructor (
        private id: string,
        private name: string,
        private email: string,
        private birthday: Date,
        private classId: string
    ) {}
    
    getId(): string {
        return this.id
    }

    getName(): string {
        return this.name
    }

    getEmail(): string {
        return this.email
    }

    getBirthday(): Date {
        return this.birthday
    }

    getClassId(): string {
        return this.classId
    }

}