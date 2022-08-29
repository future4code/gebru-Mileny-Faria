export type user = {
    id: string,
    name: string,
    email: string,
    password: string,
    role: ROLE_TYPES
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
    password: string,
    role: ROLE_TYPES
}

enum ROLE_TYPES {
    ADMIN = 'ADMIN',
    NORMAL = 'NORMAL'
}

export interface AuthenticationData {
    id: string,
    role: string
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

 