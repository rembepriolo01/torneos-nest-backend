import { UserRole } from "../dto/roles.enum";
export declare class UpdateUser {
    id: string;
    name: string;
    password: string;
    role: UserRole;
    updatedAt: Date;
}
