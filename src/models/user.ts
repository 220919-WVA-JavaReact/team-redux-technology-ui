export enum Role {
    ADMIN = 'ADMIN',
    BUYER = 'BUYER'
}

export interface User {
    user_id: string,
    username: string,
    role: Role
} 

export type UserType = {
    user_id: string,
    username: string,
    role: Role
}

export class UserC {
    user_id: string;
    username: string;
    role: Role;
    
    constructor(user_id: string, username: string, role: Role){
        this.user_id = user_id;
        this.username = username;
        this.role = role;
    }
}