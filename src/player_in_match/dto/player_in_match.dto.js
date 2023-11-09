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
exports.PlayerInMatchDto = void 0;
const class_validator_1 = require("class-validator");
const match_entity_1 = require("../../matches/entities/match.entity");
const player_entity_1 = require("../../players/entities/player.entity");
class PlayerInMatchDto {
}
exports.PlayerInMatchDto = PlayerInMatchDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], PlayerInMatchDto.prototype, "matchEvent", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], PlayerInMatchDto.prototype, "point", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", typeof (_a = typeof player_entity_1.Player !== "undefined" && player_entity_1.Player) === "function" ? _a : Object)
], PlayerInMatchDto.prototype, "player", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", typeof (_b = typeof match_entity_1.Match !== "undefined" && match_entity_1.Match) === "function" ? _b : Object)
], PlayerInMatchDto.prototype, "match", void 0);
//# sourceMappingURL=player_in_match.dto.js.map