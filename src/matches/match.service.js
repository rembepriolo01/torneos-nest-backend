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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const short_uuid_1 = require("short-uuid");
const team_service_1 = require("../teams/team.service");
const typeorm_2 = require("typeorm");
const Match_entity_1 = require("./entities/Match.entity");
const tournam_service_1 = require("../tournaments/tournam.service");
let MatchService = exports.MatchService = class MatchService {
    constructor(matchRepository, teamService, tournamService) {
        this.matchRepository = matchRepository;
        this.teamService = teamService;
        this.tournamService = tournamService;
    }
    createMatch(matchDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { dateMatch, localTeam, visitingTeam, tournam } = matchDto;
            yield this.tournamService.findTournamById(String(tournam));
            yield this.teamService.findTeamById(String(localTeam));
            yield this.teamService.findTeamById(String(visitingTeam));
            if (matchDto.localTeam === matchDto.visitingTeam) {
                throw new common_1.BadRequestException('Los equipos están duplicados.');
            }
            try {
                const newMatch = this.matchRepository.create(Object.assign(Object.assign({}, matchDto), { id: (0, short_uuid_1.generate)() }));
                return yield this.matchRepository.save(newMatch);
            }
            catch (error) {
                console.log(error);
                if (error.code === 'ER_DUP_ENTRY') {
                    throw new common_1.BadRequestException(`The Match:${matchDto.dateMatch} :${matchDto.localTeam} :${matchDto.visitingTeam} already exists!`);
                }
                throw new common_1.InternalServerErrorException('Something terribe happen!!!');
            }
        });
    }
    findAllMatch() {
        return __awaiter(this, void 0, void 0, function* () {
            const matchData = yield this.matchRepository.find({
                relations: ['localTeam.players', 'visitingTeam.players', 'tournam'],
            });
            if (!matchData || matchData.length == 0) {
                throw new common_1.NotFoundException('Matchents data not found!');
            }
            return matchData;
        });
    }
    findMatchById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingMatch = yield this.matchRepository.findOne({
                where: { id: id.toString() },
                relations: ['localTeam.players', 'visitingTeam.players'],
            });
            if (!existingMatch) {
                throw new common_1.NotFoundException(`Partido no encontrado`);
            }
            return existingMatch;
        });
    }
    updateMatch(id, matchData) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingMatch = yield this.matchRepository.findOne({
                where: { id: id.toString() }
            });
            if (!existingMatch) {
                throw new common_1.NotFoundException(`Match with ID ${id} not found`);
            }
            try {
                Object.assign(existingMatch, matchData);
                const updateMatch = yield this.matchRepository.save(existingMatch);
                return updateMatch;
            }
            catch (error) {
                console.log(error);
                if (error.code === 'ER_DUP_ENTRY') {
                    throw new common_1.BadRequestException(`The Match already exists!`);
                }
                if (error.code === 'ER_NO_DEFAULT_FOR_FIELD') {
                    throw new common_1.BadRequestException(`The Match1: not exists!`);
                }
                if (error.code === 'ER_NO_REFERENCED_ROW_2') {
                    throw new common_1.BadRequestException(`The Match2: not exists!`);
                }
                throw new common_1.InternalServerErrorException('Something terribe happen!!!');
            }
        });
    }
    deleteMatch(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const match = yield this.matchRepository.findOne({ where: { id: id.toString() } });
            if (!match) {
                throw new common_1.NotFoundException(`The Match:${id} not found`);
            }
            yield this.matchRepository.softRemove(match);
            return { message: `The Match:${match} disabled` };
        });
    }
    restoreMatchent(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const matchent = yield this.matchRepository.findOne({
                where: { id: id.toString() },
                withDeleted: true,
            });
            if (!matchent) {
                throw new common_1.NotFoundException(`Matchent with ID ${id} not found.`);
            }
            if (matchent.deleteAt == null) {
                throw new common_1.NotFoundException(`Matchent with ID ${id} already restored.`);
            }
            matchent.deleteAt = null;
            return this.matchRepository.save(matchent);
        });
    }
};
exports.MatchService = MatchService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Match_entity_1.Match)),
    __metadata("design:paramtypes", [typeorm_2.Repository, typeof (_a = typeof team_service_1.TeamService !== "undefined" && team_service_1.TeamService) === "function" ? _a : Object, typeof (_b = typeof tournam_service_1.TournamService !== "undefined" && tournam_service_1.TournamService) === "function" ? _b : Object])
], MatchService);
//# sourceMappingURL=match.service.js.map