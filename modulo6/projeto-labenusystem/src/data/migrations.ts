import { connection } from './connection'

const printError = (error: any) => {console.log(error.sqlMessage || error.message)}

const createTables = () => connection
    .raw(`

        CREATE TABLE IF NOT EXISTS students (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            birth_date DATE NOT NULL,
            class_id VARCHAR(255),
            FOREIGN KEY (class_id) REFERENCES classes(id)
        );

        CREATE TABLE IF NOT EXISTS students_hobbies (
            id VARCHAR(255) PRIMARY KEY,
            student_id VARCHAR(255),
            FOREIGN KEY (student_id) REFERENCES students(id),
            hobby_id VARCHAR(255),
            FOREIGN KEY (hobby_id) REFERENCES hobbies(id)
        );

        CREATE TABLE IF NOT EXISTS hobbies (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
        );

        CREATE TABLE IF NOT EXISTS classes (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255),
            module VARCHAR(255) DEFAULT 0
        );

        CREATE TABLE IF NOT EXISTS teachers (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            birth_date DATE NOT NULL,
            class_id VARCHAR(255),
            FOREIGN KEY (class_id) REFERENCES classes(id)
        );

        CREATE TABLE IF NOT EXISTS teachers_specialties (
            id VARCHAR(255) PRIMARY KEY,
            teacher_id VARCHAR(255),
            FOREIGN KEY (teacher_id) REFERENCES teachers(id),
            specialties_id VARCHAR(255),
            FOREIGN KEY (specialties_id) REFERENCES specialties(id)
        );

        CREATE TABLE IF NOT EXISTS specialties (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
        );

       
    
    `)
    .then(() => {console.log('Tabelas criadas')})
    .catch(printError)

    const closeConnection = () => {connection.destroy()}

    createTables()
        .finally(closeConnection)