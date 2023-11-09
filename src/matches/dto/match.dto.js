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
exports.MatchDto = void 0;
const class_validator_1 = require("class-validator");
const team_entity_1 = require("../../teams/entities/team.entity");
const tournam_entity_1 = require("../../tournaments/entities/tournam.entity");
class MatchDto {
}
exports.MatchDto = MatchDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], MatchDto.prototype, "index", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], MatchDto.prototype, "dateMatch", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], MatchDto.prototype, "field", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], MatchDto.prototype, "referee", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", typeof (_a = typeof tournam_entity_1.Tournam !== "undefined" && tournam_entity_1.Tournam) === "function" ? _a : Object)
], MatchDto.prototype, "tournam", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", typeof (_b = typeof team_entity_1.Team !== "undefined" && team_entity_1.Team) === "function" ? _b : Object)
], MatchDto.prototype, "localTeam", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", typeof (_c = typeof team_entity_1.Team !== "undefined" && team_entity_1.Team) === "function" ? _c : Object)
], MatchDto.prototype, "visitingTeam", void 0);
//# sourceMappingURL=match.dto.js.map