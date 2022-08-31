export type user = {
   id: string
   email: string
   password: string
   name: string
   nickname: string,
   role: ROLE_TYPES
}

export type login = {
   id: string
   email: string
   password: string
}

enum ROLE_TYPES {
   ADMIN = 'ADMIN',
   NORMAL = 'NORMAL'
}

export interface UserInputDTO {
   name: string,
   nickname: string,
   email: string,
   password: string,
   role: ROLE_TYPES
}

export interface LoginInputDTO {
   email: string,
   password: string
}


export interface GetProfileDTO {
   id: string
}


export interface EditUserInputDTO {
   name: string,
   nickname: string,
   id: string,
   token: string
}

export interface EditUserInput {
   name: string,
   nickname: string,
   id: string
}

export interface AuthenticationData {
   id: string,
   role: ROLE_TYPES
}

