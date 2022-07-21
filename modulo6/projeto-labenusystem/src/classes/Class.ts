import { Teacher } from './Teacher'
import { Student } from './Student'

export class Class {

    constructor (
        private id: string,
        private name: string,
        private module: number
    ) {}

    getIdClass(): string {
        return this.id
    }

    getTeacherClass(): string {
        return this.name
    }

    getModule(): number {
        return this.module
    }

}