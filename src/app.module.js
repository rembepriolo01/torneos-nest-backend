"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const constants_1 = require("../config/constants");
const auth_module_1 = require("./auth/auth.module");
const match_module_1 = require("./matches/match.module");
const player_in_match_module_1 = require("./player_in_match/player_in_match.module");
const player_module_1 = require("./players/player.module");
const team_module_1 = require("./teams/team.module");
const tournam_module_1 = require("./tournaments/tournam.module");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.env',
                isGlobal: true
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: (configService) => ({
                    type: 'mysql',
                    host: configService.get(constants_1.DB_HOST),
                    port: +configService.get(constants_1.DB_PORT),
                    username: configService.get(constants_1.DB_USER),
                    password: configService.get(constants_1.DB_PASSWORD),
                    database: configService.get(constants_1.DB_DATABASE),
                    entities: [__dirname + '/**/*.entity{.ts,.js}'],
                }),
                inject: [config_1.ConfigService],
            }),
            auth_module_1.AuthModule,
            team_module_1.TeamModule,
            tournam_module_1.TournamModule,
            player_module_1.PlayerModule,
            match_module_1.MatchModule,
            player_in_match_module_1.PlayerInMatchModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map