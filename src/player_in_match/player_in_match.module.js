"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerInMatchModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_service_1 = require("../auth/auth.service");
const user_entity_1 = require("../auth/entities/user.entity");
const match_entity_1 = require("../matches/entities/match.entity");
const match_service_1 = require("../matches/match.service");
const player_entity_1 = require("../players/entities/player.entity");
const player_service_1 = require("../players/player.service");
const team_entity_1 = require("../teams/entities/team.entity");
const team_service_1 = require("../teams/team.service");
const tournam_entity_1 = require("../tournaments/entities/tournam.entity");
const tournam_service_1 = require("../tournaments/tournam.service");
const player_in_match_entity_1 = require("./entities/player_in_match.entity");
const player_in_match_controller_1 = require("./player_in_match.controller");
const player_in_match_service_1 = require("./player_in_match.service");
let PlayerInMatchModule = exports.PlayerInMatchModule = class PlayerInMatchModule {
};
exports.PlayerInMatchModule = PlayerInMatchModule = __decorate([
    (0, common_1.Module)({
        controllers: [player_in_match_controller_1.PlayerInMatchController],
        providers: [
            player_in_match_service_1.PlayerInMatchService,
            match_service_1.MatchService,
            tournam_service_1.TournamService,
            team_service_1.TeamService,
            player_service_1.PlayerService,
            auth_service_1.AuthService,
        ],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                player_in_match_entity_1.PlayerInMatch,
                match_entity_1.Match,
                tournam_entity_1.Tournam,
                team_entity_1.Team,
                player_entity_1.Player,
                user_entity_1.User,
            ]),
        ]
    })
], PlayerInMatchModule);
//# sourceMappingURL=player_in_match.module.js.map