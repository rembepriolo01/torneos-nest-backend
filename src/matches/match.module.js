"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_service_1 = require("../auth/auth.service");
const user_entity_1 = require("../auth/entities/user.entity");
const team_entity_1 = require("../teams/entities/team.entity");
const team_service_1 = require("../teams/team.service");
const tournam_entity_1 = require("../tournaments/entities/tournam.entity");
const tournam_service_1 = require("../tournaments/tournam.service");
const match_entity_1 = require("./entities/match.entity");
const match_controller_1 = require("./match.controller");
const match_service_1 = require("./match.service");
let MatchModule = exports.MatchModule = class MatchModule {
};
exports.MatchModule = MatchModule = __decorate([
    (0, common_1.Module)({
        controllers: [match_controller_1.MatchController],
        providers: [
            match_service_1.MatchService,
            tournam_service_1.TournamService,
            team_service_1.TeamService,
            auth_service_1.AuthService
        ],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([match_entity_1.Match, tournam_entity_1.Tournam, team_entity_1.Team, user_entity_1.User]),
        ]
    })
], MatchModule);
//# sourceMappingURL=match.module.js.map