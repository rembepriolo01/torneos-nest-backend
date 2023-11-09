"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const bcryptjs = __importStar(require("bcryptjs"));
const short_uuid_1 = require("short-uuid");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
let AuthService = exports.AuthService = class AuthService {
    hashPassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            const saltRounds = 10;
            return bcryptjs.hashSync(password, saltRounds);
        });
    }
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    registerUser(registerUser) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdUser = yield this.userRepository.create(Object.assign(Object.assign({}, registerUser), { id: (0, short_uuid_1.generate)(), password: yield this.hashPassword(registerUser.password) }));
                yield this.userRepository.save(createdUser);
                createdUser.password = undefined;
                return createdUser;
            }
            catch (error) {
                console.log(error);
                if ((error === null || error === void 0 ? void 0 : error.code) === 'ER_DUP_ENTRY') {
                    throw new common_1.HttpException(`The user with email:${registerUser.email} already exists!`, common_1.HttpStatus.BAD_REQUEST);
                }
                if ((error === null || error === void 0 ? void 0 : error.code) === 'WARN_DATA_TRUNCATED') {
                    throw new common_1.HttpException(`The role:${registerUser.role} not exists!`, common_1.HttpStatus.BAD_REQUEST);
                }
                throw new common_1.HttpException('Something went wrong', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        });
    }
    login(loginDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = loginDto;
            const user = yield this.userRepository.findOne({ where: { email } });
            if (!user) {
                throw new common_1.UnauthorizedException('Not valid credentials');
            }
            if (!bcryptjs.compareSync(password, user.password)) {
                throw new common_1.UnauthorizedException('Not valid credentials');
            }
            const userWithoutPassword = Object.assign({}, user);
            delete userWithoutPassword.password;
            return {
                user: userWithoutPassword,
                token: this.getJwtToken({ id: user.id }),
            };
        });
    }
    findAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userRepository.find();
            if (!users || users.length == 0) {
                throw new common_1.NotFoundException('Users data not found!');
            }
            return users.map((user) => {
                const { password } = user, userWithoutPassword = __rest(user, ["password"]);
                return userWithoutPassword;
            });
        });
    }
    findUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findOne({
                where: { id: id.toString() },
                relations: ['tournaments'],
            });
            const userWithoutPassword = Object.assign({}, user);
            delete userWithoutPassword.password;
            if (!user)
                throw new common_1.NotFoundException(`User #${id} not found`);
            return userWithoutPassword;
        });
    }
    updateUser(id, updateUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findOne({ where: { id: id.toString() } });
            if (!user) {
                throw new common_1.NotFoundException(`The User with ID:${id} not found`);
            }
            try {
                Object.assign(user, updateUserDto);
                if (updateUserDto.password) {
                    user.password = yield this.hashPassword(updateUserDto.password);
                }
                const updatedUser = yield this.userRepository.save(user);
                const userWithout = Object.assign({}, updatedUser);
                delete userWithout.password;
                delete userWithout.createdAt;
                return userWithout;
            }
            catch (error) {
                console.log(error);
                if ((error === null || error === void 0 ? void 0 : error.code) === 'WARN_DATA_TRUNCATED') {
                    throw new common_1.HttpException(`The role:${updateUserDto.role} not exists!`, common_1.HttpStatus.BAD_REQUEST);
                }
            }
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findOne({ where: { id: id.toString() } });
            if (!user) {
                throw new common_1.NotFoundException(`The User:${id} not found`);
            }
            yield this.userRepository.softRemove(user);
            return { message: `The User:${id} disabled` };
        });
    }
    restoreUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findOne({
                where: { id: id.toString() },
                withDeleted: true,
            });
            if (!user) {
                throw new common_1.NotFoundException(`User with ID ${id} not found.`);
            }
            if (user.deleteAt == null) {
                throw new common_1.NotFoundException(`User with ID ${id} already restored.`);
            }
            user.deleteAt = null;
            return this.userRepository.save(user);
        });
    }
    getJwtToken(payload) {
        const token = this.jwtService.sign(payload);
        return token;
    }
};
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map