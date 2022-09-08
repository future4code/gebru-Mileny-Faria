export type user = {
   id: string
   name: string
   email: string
   password: string
   role: ROLE_TYPES
}

enum ROLE_TYPES {
   ADMIN = 'ADMIN',
   NORMAL = 'NORMAL'
}

export interface SignupUserDTO {
   email: string
   name: string
   password: string
   role: ROLE_TYPES
}

export interface AuthenticationData {
   id: string
   role: string
} 

export interface LoginInputDTO {
   email: string
   password: string
}