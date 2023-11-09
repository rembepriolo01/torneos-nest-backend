"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const auth_service_1 = require("../auth/auth.service");
const user_entity_1 = require("../auth/entities/user.entity");
const tournam_entity_1 = require("../tournaments/entities/tournam.entity");
const tournam_service_1 = require("../tournaments/tournam.service");
const team_entity_1 = require("./entities/team.entity");
const team_controller_1 = require("./team.controller");
const team_service_1 = require("./team.service");
let TeamModule = exports.TeamModule = class TeamModule {
};
exports.TeamModule = TeamModule = __decorate([
    (0, common_1.Module)({
        controllers: [team_controller_1.TeamController],
        providers: [
            team_service_1.TeamService,
            tournam_service_1.TournamService,
            auth_service_1.AuthService,
        ],
        exports: [team_service_1.TeamService],
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forFeature([team_entity_1.Team, tournam_entity_1.Tournam, user_entity_1.User]),
        ]
    })
], TeamModule);
//# sourceMappingURL=team.module.js.map