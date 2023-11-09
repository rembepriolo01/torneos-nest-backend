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
exports.Player = void 0;
const match_entity_1 = require("../../matches/entities/match.entity");
const player_in_match_entity_1 = require("../../player_in_match/entities/player_in_match.entity");
const team_entity_1 = require("../../teams/entities/team.entity");
const typeorm_1 = require("typeorm");
const dto_1 = require("../dto");
let Player = exports.Player = class Player {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Player.prototype, "playerId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Player.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], Player.prototype, "birthDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Player.prototype, "playerNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: dto_1.Positions }),
    __metadata("design:type", String)
], Player.prototype, "position", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Player.prototype, "isCaptain", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Player.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], Player.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], Player.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], Player.prototype, "deleteAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => team_entity_1.Team, (team) => team.players),
    __metadata("design:type", typeof (_a = typeof team_entity_1.Team !== "undefined" && team_entity_1.Team) === "function" ? _a : Object)
], Player.prototype, "team", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => match_entity_1.Match, (match) => match.players),
    __metadata("design:type", Array)
], Player.prototype, "matchs", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => player_in_match_entity_1.PlayerInMatch, (playerInMatch) => playerInMatch.player),
    __metadata("design:type", Array)
], Player.prototype, "playerInMatches", void 0);
exports.Player = Player = __decorate([
    (0, typeorm_1.Entity)('players'),
    (0, typeorm_1.Unique)('unique_player_playerNumber_in_team', ['playerNumber', 'team'])
], Player);
//# sourceMappingURL=player.entity.js.map