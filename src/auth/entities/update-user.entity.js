"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUser = void 0;
const typeorm_1 = require("typeorm");
const roles_enum_1 = require("../dto/roles.enum");
let UpdateUser = exports.UpdateUser = class UpdateUser {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], UpdateUser.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, }),
    __metadata("design:type", String)
], UpdateUser.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UpdateUser.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: roles_enum_1.UserRole, default: roles_enum_1.UserRole.User }),
    __metadata("design:type", String)
], UpdateUser.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)",
        onUpdate: "CURRENT_TIMESTAMP(6)"
    }),
    __metadata("design:type", Date)
], UpdateUser.prototype, "updatedAt", void 0);
exports.UpdateUser = UpdateUser = __decorate([
    (0, typeorm_1.Entity)('users')
], UpdateUser);
//# sourceMappingURL=update-user.entity.js.map