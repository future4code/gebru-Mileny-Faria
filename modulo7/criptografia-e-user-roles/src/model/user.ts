export type user = {
   id: string
   email: string
   password: string
   name: string
   nickname: string
}

export type login = {
   id: string
   email: string
   password: string
}

export interface UserInputDTO {
   name: string,
   nickname: string,
   email: string,
   password: string
}

export interface LoginInputDTO {
   email: string,
   password: string
}


export interface GetProfileDTO {
   token: string
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
   id: string
}