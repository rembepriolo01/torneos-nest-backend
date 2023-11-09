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
exports.TournamDto = void 0;
const class_validator_1 = require("class-validator");
const user_entity_1 = require("../../auth/entities/user.entity");
const leagues_enum_1 = require("./leagues.enum");
const locations_enum_1 = require("./locations.enum");
class TournamDto {
}
exports.TournamDto = TournamDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], TournamDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(locations_enum_1.Locations),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], TournamDto.prototype, "location", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(leagues_enum_1.Leagues),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], TournamDto.prototype, "league", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], TournamDto.prototype, "startDate", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], TournamDto.prototype, "endDate", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", typeof (_a = typeof user_entity_1.User !== "undefined" && user_entity_1.User) === "function" ? _a : Object)
], TournamDto.prototype, "user", void 0);
//# sourceMappingURL=tournam.dto.js.map