import { Teacher } from './Teacher'
import { Student } from './Student'

export class Class {
    private id: string
    private name: string
    private teachers: Teacher[] = []
    private students: Student[] = []
    private module: number = 0

    constructor(id: string, name: string) {
        this.id = id
        this.name = name
    }


}