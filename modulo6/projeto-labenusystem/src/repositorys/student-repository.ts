import { connection } from '../data/connection'
import { Student } from '../classes/Student'

export const createStudent = async (student: Student) => {
    try {
        return await connection()

    } catch {

    }
        
    }

