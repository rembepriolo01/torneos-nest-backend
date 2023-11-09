import { Tournam } from "src/tournaments/entities/tournam.entity";
import { UserRole } from "../dto/roles.enum";
export declare class User {
    id: string;
    email: string;
    name: string;
    password: string;
    role: UserRole;
    createdAt: Date;
    updatedAt: Date;
    deleteAt: Date;
    tournaments: Tournam[];
}
