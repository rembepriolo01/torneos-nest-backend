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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tournam = void 0;
const user_entity_1 = require("../../auth/entities/user.entity");
const match_entity_1 = require("../../matches/entities/match.entity");
const player_entity_1 = require("../../players/entities/player.entity");
const team_entity_1 = require("../../teams/entities/team.entity");
const typeorm_1 = require("typeorm");
const leagues_enum_1 = require("../dto/leagues.enum");
const locations_enum_1 = require("../dto/locations.enum");
let Tournam = exports.Tournam = class Tournam {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Tournam.prototype, "tournamId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Tournam.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: locations_enum_1.Locations }),
    __metadata("design:type", String)
], Tournam.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: leagues_enum_1.Leagues }),
    __metadata("design:type", String)
], Tournam.prototype, "league", void 0);
__decorate([
    (0, typeorm_1.Column)('date'),
    __metadata("design:type", Date)
], Tournam.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { nullable: true }),
    __metadata("design:type", Date)
], Tournam.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], Tournam.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], Tournam.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Tournam.prototype, "deleteAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => match_entity_1.Match, (match) => match.tournam),
    __metadata("design:type", Array)
], Tournam.prototype, "matchs", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => team_entity_1.Team, (team) => team.tournam),
    __metadata("design:type", Array)
], Tournam.prototype, "teams", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => player_entity_1.Player, (player) => player.matchs),
    __metadata("design:type", Array)
], Tournam.prototype, "players", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.tournaments),
    __metadata("design:type", typeof (_a = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _a : Object)
], Tournam.prototype, "user", void 0);
exports.Tournam = Tournam = __decorate([
    (0, typeorm_1.Entity)('tournaments'),
    (0, typeorm_1.Unique)('unique_tournam_name_in_user', ['name', 'user'])
], Tournam);
//# sourceMappingURL=tournam.entity.js.map