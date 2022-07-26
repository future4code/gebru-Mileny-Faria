export class Hobby {

    constructor (
        private id: string,
        private name: string
    ) {}

    getIdHobby(): string {
        return this.id
    }

    getNameHobby(): string {
        return this.name
    }
}