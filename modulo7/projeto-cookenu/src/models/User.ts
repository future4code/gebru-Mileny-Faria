export type user = {
    id: string,
    name: string,
    email: string,
    password: string
}

export type userProfile = {
   id: string,
   name: string,
   email: string
}

export type friendship = {
    id: string,
    friendId: string
}

export interface SignupUserDTO {
    email: string,
    name: string,
    password: string
} 

export interface AuthenticationData {
    id: string
 } 

export interface LoginInputDTO {
    email: string,
    password: string
}

export interface GetProfileDTO {
   token: string
}

export interface GetProfileByIdDTO {
    id: string,
    token: string
}

export interface FriendsDTO {
    friendId: string;
    token: string;
  }

 