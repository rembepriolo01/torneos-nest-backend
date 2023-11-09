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
exports.Team = void 0;
const match_entity_1 = require("../../matches/entities/match.entity");
const player_entity_1 = require("../../players/entities/player.entity");
const tournam_entity_1 = require("../../tournaments/entities/tournam.entity");
const typeorm_1 = require("typeorm");
let Team = exports.Team = class Team {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Team.prototype, "teamId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Team.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Team.prototype, "logo", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Team.prototype, "coach", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], Team.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], Team.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], Team.prototype, "deleteAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tournam_entity_1.Tournam, (tournam) => tournam.teams),
    __metadata("design:type", typeof (_a = typeof tournam_entity_1.Tournam !== "undefined" && tournam_entity_1.Tournam) === "function" ? _a : Object)
], Team.prototype, "tournam", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => player_entity_1.Player, (player) => player.team),
    __metadata("design:type", Array)
], Team.prototype, "players", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => match_entity_1.Match, (match) => match.localTeam),
    __metadata("design:type", Array)
], Team.prototype, "localTeam", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => match_entity_1.Match, (match) => match.visitingTeam),
    __metadata("design:type", Array)
], Team.prototype, "visitingTeam", void 0);
exports.Team = Team = __decorate([
    (0, typeorm_1.Entity)('teams'),
    (0, typeorm_1.Unique)('unique_team_name_in_tournament', ['name', 'tournam'])
], Team);
//# sourceMappingURL=team.entity.js.map