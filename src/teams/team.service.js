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
exports.TeamService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const short_uuid_1 = require("short-uuid");
const tournam_service_1 = require("../tournaments/tournam.service");
const typeorm_2 = require("typeorm");
const team_entity_1 = require("./entities/team.entity");
let TeamService = exports.TeamService = class TeamService {
    constructor(teamRepository, tournamService) {
        this.teamRepository = teamRepository;
        this.tournamService = tournamService;
    }
    createTeam(teamDto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.tournamService.findTournamById(String(teamDto.tournam));
            try {
                const newTeam = this.teamRepository.create(Object.assign(Object.assign({}, teamDto), { teamId: (0, short_uuid_1.generate)() }));
                return yield this.teamRepository.save(newTeam);
            }
            catch (error) {
                console.log(error);
                if (error.code === 'ER_DUP_ENTRY') {
                    throw new common_1.BadRequestException(`El equipo: ${teamDto.name} ¡ya existe!`);
                }
                throw new common_1.InternalServerErrorException('Something terribe happen!!!');
            }
        });
    }
    findAllTeam() {
        return __awaiter(this, void 0, void 0, function* () {
            const teamData = yield this.teamRepository.find({
                relations: ['tournam'],
            });
            if (!teamData || teamData.length == 0) {
                throw new common_1.NotFoundException('¡No se han encontrado datos de equipos!');
            }
            return teamData;
        });
    }
    findTeamById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingTeam = yield this.teamRepository.findOne({
                where: { teamId: id.toString() },
                relations: ['tournam', 'players'],
            });
            if (!existingTeam)
                throw new common_1.NotFoundException(`Equipo: ${id} no encontrado`);
            return existingTeam;
        });
    }
    updateTeam(id, teamData) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingTeam = yield this.teamRepository.findOne({ where: { teamId: id.toString() } });
            if (!existingTeam) {
                throw new common_1.NotFoundException(`El Equipo: ${id} no encontrado`);
            }
            Object.assign(existingTeam, teamData);
            const updateTeam = yield this.teamRepository.save(existingTeam);
            const teamWithout = Object.assign({}, updateTeam);
            delete teamWithout.createdAt;
            return teamWithout;
        });
    }
    deleteTeam(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const team = yield this.teamRepository.findOne({ where: { teamId: id.toString() } });
            if (!team) {
                throw new common_1.NotFoundException(`El Equipo: ${id} no encontrado`);
            }
            yield this.teamRepository.softRemove(team);
            return { message: `El equipo:${team.name} deshabilitado` };
        });
    }
    restoreTeam(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const team = yield this.teamRepository.findOne({
                where: { teamId: id.toString() },
                withDeleted: true,
            });
            if (!team) {
                throw new common_1.NotFoundException(`El Equipo: ${id} no encontrado`);
            }
            if (team.deleteAt == null) {
                throw new common_1.NotFoundException(`El equipo con ID: ${id} ya está restaurado.`);
            }
            team.deleteAt = null;
            return this.teamRepository.save(team);
        });
    }
};
exports.TeamService = TeamService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(team_entity_1.Team)),
    __metadata("design:paramtypes", [typeorm_2.Repository, typeof (_a = typeof tournam_service_1.TournamService !== "undefined" && tournam_service_1.TournamService) === "function" ? _a : Object])
], TeamService);
//# sourceMappingURL=team.service.js.map