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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TournamService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const short_uuid_1 = require("short-uuid");
const auth_service_1 = require("../auth/auth.service");
const typeorm_2 = require("typeorm");
const tournam_entity_1 = require("./entities/tournam.entity");
let TournamService = exports.TournamService = class TournamService {
    constructor(tournamRepository, authService) {
        this.tournamRepository = tournamRepository;
        this.authService = authService;
    }
    createTournam(tournamDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingUser = yield this.authService.findUserById(String(tournamDto.user));
            if (!existingUser) {
                throw new common_1.NotFoundException(`Usuario con ID: ${tournamDto.user} no encontrado.`);
            }
            try {
                const newTournam = this.tournamRepository.create(Object.assign(Object.assign({}, tournamDto), { tournamId: (0, short_uuid_1.generate)() }));
                return yield this.tournamRepository.save(newTournam);
            }
            catch (error) {
                console.log(error);
                if (error.code === 'ER_DUP_ENTRY') {
                    throw new common_1.BadRequestException(`El Torneo: ${tournamDto.name} ¡ya existe!`);
                }
                throw new common_1.InternalServerErrorException('Something terribe happen!!!');
            }
        });
    }
    findAllTournam() {
        return __awaiter(this, void 0, void 0, function* () {
            const tournaments = yield this.tournamRepository.find();
            if (!tournaments || tournaments.length == 0) {
                throw new common_1.NotFoundException('¡No se han encontrado datos de torneos!');
            }
            return tournaments;
        });
    }
    findTournamById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingTournam = yield this.tournamRepository.findOne({
                where: { tournamId: id.toString() },
                relations: ['teams', 'matchs'],
            });
            if (!existingTournam) {
                throw new common_1.NotFoundException(`El Torneo: ${id} no encontrado.`);
            }
            return existingTournam;
        });
    }
    updateTournam(id, tournamData) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingTournam = yield this.tournamRepository.findOne({ where: { tournamId: id.toString() } });
            if (!existingTournam) {
                throw new common_1.NotFoundException(`El Torneo: ${id} no encontrado.`);
            }
            Object.assign(existingTournam, tournamData);
            const updateTournam = yield this.tournamRepository.save(existingTournam);
            const tournamWithout = Object.assign({}, updateTournam);
            delete tournamWithout.createdAt;
            return tournamWithout;
        });
    }
    deleteTournam(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const tournam = yield this.tournamRepository.findOne({ where: { tournamId: id.toString() } });
            if (!tournam) {
                throw new common_1.NotFoundException(`El Torneo: ${id} no encontrado.`);
            }
            yield this.tournamRepository.softRemove(tournam);
            return { message: `El Torneo: ${tournam.name} deshabilitado.` };
        });
    }
    restoreTournament(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const tournament = yield this.tournamRepository.findOne({
                where: { tournamId: id.toString() },
                withDeleted: true,
            });
            if (!tournament) {
                throw new common_1.NotFoundException(`El Torneo: ${id} no encontrado.`);
            }
            if (tournament.deleteAt == null) {
                throw new common_1.NotFoundException(`El Torneo con ID: ${id} ya está restaurado.`);
            }
            tournament.deleteAt = null;
            return this.tournamRepository.save(tournament);
        });
    }
};
exports.TournamService = TournamService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tournam_entity_1.Tournam)),
    __metadata("design:paramtypes", [typeorm_2.Repository, typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], TournamService);
//# sourceMappingURL=tournam.service.js.map