export type User = {
    id: string,
    name: string,
    email: string,
    password: string
 }

 export interface createUserDTO {
    email: string,
    name: string,
    password: string
} 

export interface AuthenticationData {
    id: string
 } 

 