import { AuthService } from './auth.service';
import { LoginDto, UpdateUserDto, UserDto, UserRole } from './dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    getUserRoles(): Promise<UserRole[]>;
    registerUser(dto: UserDto): Promise<{
        message: string;
        data: import("./entities/user.entity").User;
    }>;
    login(loginDto: LoginDto): Promise<import("./interfaces/login-response").LoginResponse>;
    findAllUsers(): Promise<Partial<import("./entities/user.entity").User>[]>;
    findUserById(id: string): Promise<Partial<import("./entities/user.entity").User>>;
    updateUser(id: number, updateUserDto: UpdateUserDto): Promise<import("./entities/user.entity").User>;
    deleteUser(id: string): Promise<{
        message: string;
    }>;
    restoreUser(response: any, id: string): Promise<any>;
}
