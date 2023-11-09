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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Match = void 0;
const player_in_match_entity_1 = require("../../player_in_match/entities/player_in_match.entity");
const player_entity_1 = require("../../players/entities/player.entity");
const team_entity_1 = require("../../teams/entities/team.entity");
const tournam_entity_1 = require("../../tournaments/entities/tournam.entity");
const typeorm_1 = require("typeorm");
let Match = exports.Match = class Match {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Match.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Match.prototype, "index", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Match.prototype, "dateMatch", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Match.prototype, "field", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Match.prototype, "referee", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], Match.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], Match.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], Match.prototype, "deleteAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tournam_entity_1.Tournam, (tournam) => tournam.matchs),
    __metadata("design:type", typeof (_a = typeof tournam_entity_1.Tournam !== "undefined" && tournam_entity_1.Tournam) === "function" ? _a : Object)
], Match.prototype, "tournam", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => team_entity_1.Team, (team) => team.localTeam),
    (0, typeorm_1.JoinColumn)({ name: 'localTeamId', referencedColumnName: 'teamId' }),
    __metadata("design:type", typeof (_b = typeof team_entity_1.Team !== "undefined" && team_entity_1.Team) === "function" ? _b : Object)
], Match.prototype, "localTeam", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => team_entity_1.Team, (team) => team.visitingTeam),
    (0, typeorm_1.JoinColumn)({ name: 'visitingTeamId', referencedColumnName: 'teamId' }),
    __metadata("design:type", typeof (_c = typeof team_entity_1.Team !== "undefined" && team_entity_1.Team) === "function" ? _c : Object)
], Match.prototype, "visitingTeam", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => player_entity_1.Player, (player) => player.matchs),
    __metadata("design:type", Array)
], Match.prototype, "players", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => player_in_match_entity_1.PlayerInMatch, (playerInMatch) => playerInMatch.player),
    __metadata("design:type", Array)
], Match.prototype, "playerInMatches", void 0);
exports.Match = Match = __decorate([
    (0, typeorm_1.Entity)('matches'),
    (0, typeorm_1.Unique)(['localTeam', 'dateMatch']),
    (0, typeorm_1.Unique)(['visitingTeam', 'dateMatch'])
], Match);
//# sourceMappingURL=match.entity.js.map