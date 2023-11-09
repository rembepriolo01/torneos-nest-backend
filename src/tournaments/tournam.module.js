"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TournamModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_service_1 = require("../auth/auth.service");
const user_entity_1 = require("../auth/entities/user.entity");
const tournam_entity_1 = require("./entities/tournam.entity");
const tournam_controller_1 = require("./tournam.controller");
const tournam_service_1 = require("./tournam.service");
let TournamModule = exports.TournamModule = class TournamModule {
};
exports.TournamModule = TournamModule = __decorate([
    (0, common_1.Module)({
        controllers: [tournam_controller_1.TournamController],
        providers: [tournam_service_1.TournamService, auth_service_1.AuthService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([tournam_entity_1.Tournam, user_entity_1.User]),
        ]
    })
], TournamModule);
//# sourceMappingURL=tournam.module.js.map