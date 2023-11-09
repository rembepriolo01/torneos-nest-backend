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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerInMatch = void 0;
const match_entity_1 = require("../../matches/entities/match.entity");
const player_entity_1 = require("../../players/entities/player.entity");
const typeorm_1 = require("typeorm");
const dto_1 = require("../dto");
let PlayerInMatch = exports.PlayerInMatch = class PlayerInMatch {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PlayerInMatch.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: dto_1.MatchEvent }),
    __metadata("design:type", String)
], PlayerInMatch.prototype, "matchEvent", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 1 }),
    __metadata("design:type", Number)
], PlayerInMatch.prototype, "point", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], PlayerInMatch.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], PlayerInMatch.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], PlayerInMatch.prototype, "deleteAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => player_entity_1.Player, (player) => player.playerInMatches),
    __metadata("design:type", typeof (_a = typeof player_entity_1.Player !== "undefined" && player_entity_1.Player) === "function" ? _a : Object)
], PlayerInMatch.prototype, "player", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => match_entity_1.Match, (match) => match.playerInMatches),
    __metadata("design:type", typeof (_b = typeof match_entity_1.Match !== "undefined" && match_entity_1.Match) === "function" ? _b : Object)
], PlayerInMatch.prototype, "match", void 0);
exports.PlayerInMatch = PlayerInMatch = __decorate([
    (0, typeorm_1.Entity)('players_in_matches'),
    (0, typeorm_1.Unique)(['player', 'createdAt'])
], PlayerInMatch);
//# sourceMappingURL=player_in_match.entity.js.map