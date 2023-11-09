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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TournamController = void 0;
const common_1 = require("@nestjs/common");
const dto_1 = require("./dto");
const leagues_enum_1 = require("./dto/leagues.enum");
const locations_enum_1 = require("./dto/locations.enum");
const tournam_service_1 = require("./tournam.service");
let TournamController = exports.TournamController = class TournamController {
    constructor(tournamService) {
        this.tournamService = tournamService;
    }
    getLeague() {
        return Object.values(leagues_enum_1.Leagues);
    }
    getLocation() {
        return Object.values(locations_enum_1.Locations);
    }
    createTournam(tournamDto) {
        return this.tournamService.createTournam(tournamDto);
    }
    findAllTournam() {
        return this.tournamService.findAllTournam();
    }
    findTournamById(id) {
        return this.tournamService.findTournamById(id);
    }
    updateTournam(id, tournamDto) {
        return this.tournamService.updateTournam(id, tournamDto);
    }
    deleteTournam(id) {
        return this.tournamService.deleteTournam(id);
    }
    restoreTournament(id) {
        return this.tournamService.restoreTournament(id);
    }
};
__decorate([
    (0, common_1.Get)('/leagues'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TournamController.prototype, "getLeague", null);
__decorate([
    (0, common_1.Get)('/locations'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TournamController.prototype, "getLocation", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.TournamDto]),
    __metadata("design:returntype", void 0)
], TournamController.prototype, "createTournam", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TournamController.prototype, "findAllTournam", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TournamController.prototype, "findTournamById", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.TournamDto]),
    __metadata("design:returntype", void 0)
], TournamController.prototype, "updateTournam", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TournamController.prototype, "deleteTournam", null);
__decorate([
    (0, common_1.Patch)('/restore/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TournamController.prototype, "restoreTournament", null);
exports.TournamController = TournamController = __decorate([
    (0, common_1.Controller)('tournam'),
    __metadata("design:paramtypes", [tournam_service_1.TournamService])
], TournamController);
//# sourceMappingURL=tournam.controller.js.map