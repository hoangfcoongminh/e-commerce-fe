import type { Role } from "./role";

export interface User {

    // id: string;
    email: string;
    fullName: string;
    phoneNumber: string;
    address: string;
    gender: string;
    role: Role;
}