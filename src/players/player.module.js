"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_service_1 = require("../auth/auth.service");
const user_entity_1 = require("../auth/entities/user.entity");
const team_entity_1 = require("../teams/entities/team.entity");
const team_module_1 = require("../teams/team.module");
const team_service_1 = require("../teams/team.service");
const tournam_entity_1 = require("../tournaments/entities/tournam.entity");
const tournam_service_1 = require("../tournaments/tournam.service");
const player_entity_1 = require("./entities/player.entity");
const player_controller_1 = require("./player.controller");
const player_service_1 = require("./player.service");
let PlayerModule = exports.PlayerModule = class PlayerModule {
};
exports.PlayerModule = PlayerModule = __decorate([
    (0, common_1.Module)({
        controllers: [player_controller_1.PlayerController],
        providers: [
            player_service_1.PlayerService,
            team_service_1.TeamService,
            tournam_service_1.TournamService,
            auth_service_1.AuthService,
        ],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([player_entity_1.Player, team_entity_1.Team, tournam_entity_1.Tournam, user_entity_1.User]),
            team_module_1.TeamModule,
        ]
    })
], PlayerModule);
//# sourceMappingURL=player.module.js.map