import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { LoginDto, UpdateUserDto, UserDto } from './dto';
import { User } from './entities/user.entity';
import { JwtPayload } from './interfaces/jwt-payload';
import { LoginResponse } from './interfaces/login-response';
export declare class AuthService {
    private readonly userRepository;
    private jwtService;
    hashPassword(password: string): Promise<string>;
    constructor(userRepository: Repository<User>, jwtService: JwtService);
    registerUser(registerUser: UserDto): Promise<User>;
    login(loginDto: LoginDto): Promise<LoginResponse>;
    findAllUsers(): Promise<Partial<User>[]>;
    findUserById(id: string): Promise<Partial<User> | undefined>;
    updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User>;
    deleteUser(id: string): Promise<{
        message: string;
    }>;
    restoreUser(id: string): Promise<User | undefined>;
    getJwtToken(payload: JwtPayload): string;
}
