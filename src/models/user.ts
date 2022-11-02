export enum Role {
    ADMIN,
    BUYER
}

export interface User {
    user_id: string,
    username: string,
    password: string,
    first_name: string,
    last_name: string;
    email: string
    role: Role
} 