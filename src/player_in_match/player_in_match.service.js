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
exports.PlayerInMatchService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const short_uuid_1 = require("short-uuid");
const match_service_1 = require("../matches/match.service");
const player_service_1 = require("../players/player.service");
const typeorm_2 = require("typeorm");
const player_in_match_entity_1 = require("./entities/player_in_match.entity");
let PlayerInMatchService = exports.PlayerInMatchService = class PlayerInMatchService {
    constructor(playerInMatchRepository, matchService, playerService) {
        this.playerInMatchRepository = playerInMatchRepository;
        this.matchService = matchService;
        this.playerService = playerService;
    }
    createPlayerInMatch(matchDto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.matchService.findMatchById(String(matchDto.match));
            yield this.playerService.findPlayerById(String(matchDto.player));
            try {
                const newMatch = this.playerInMatchRepository.create(Object.assign(Object.assign({}, matchDto), { id: (0, short_uuid_1.generate)() }));
                return yield this.playerInMatchRepository.save(newMatch);
            }
            catch (error) {
                console.log(error);
                if ((error === null || error === void 0 ? void 0 : error.code) === 'WARN_DATA_TRUNCATED') {
                    throw new common_1.HttpException(`¡Este evento: ${matchDto.matchEvent} no existe!`, common_1.HttpStatus.BAD_REQUEST);
                }
                throw new common_1.InternalServerErrorException('Something terribe happen!!!');
            }
        });
    }
    findAllPlayerInMatch() {
        return __awaiter(this, void 0, void 0, function* () {
            const matchData = yield this.playerInMatchRepository.find({
                relations: ['player.team'],
            });
            if (!matchData || matchData.length == 0) {
                throw new common_1.NotFoundException('Partidos no encontrados.');
            }
            return matchData;
        });
    }
    findPlayerInMatchById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingMatch = yield this.playerInMatchRepository.findOne({
                where: { id: id.toString() },
                relations: ['player.team'],
            });
            if (!existingMatch) {
                throw new common_1.NotFoundException(`Evento: ${id} no encontrado`);
            }
            return existingMatch;
        });
    }
    updatePlayerInMatch(id, matchData) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.matchService.findMatchById(String(matchData.match));
            yield this.playerService.findPlayerById(String(matchData.player));
            const existingMatch = yield this.playerInMatchRepository.findOne({
                where: { id: id.toString() }
            });
            if (!existingMatch) {
                throw new common_1.NotFoundException(`Evento: ${id} no encontrado`);
            }
            try {
                Object.assign(existingMatch, matchData);
                const updateMatch = yield this.playerInMatchRepository.save(existingMatch);
                return updateMatch;
            }
            catch (error) {
                console.log(error);
                if (error.code === 'WARN_DATA_TRUNCATED') {
                    throw new common_1.BadRequestException(`El Evento: ${matchData.matchEvent} not exists!`);
                }
                throw new common_1.InternalServerErrorException('Something terribe happen!!!');
            }
        });
    }
    deletePlayerInMatch(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const match = yield this.playerInMatchRepository.findOne({ where: { id: id.toString() } });
            if (!match) {
                throw new common_1.NotFoundException(`Evento: ${id} no encontrado`);
            }
            yield this.playerInMatchRepository.softRemove(match);
            return { message: `Evento: ${match} deshabilitado` };
        });
    }
    restoreMatchent(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const matchent = yield this.playerInMatchRepository.findOne({
                where: { id: id.toString() },
                withDeleted: true,
            });
            if (!matchent) {
                throw new common_1.NotFoundException(`Evento: ${id} no encontrado`);
            }
            if (matchent.deleteAt == null) {
                throw new common_1.NotFoundException(`Evento: ${id} ya está restaurado.`);
            }
            matchent.deleteAt = null;
            return this.playerInMatchRepository.save(matchent);
        });
    }
};
exports.PlayerInMatchService = PlayerInMatchService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(player_in_match_entity_1.PlayerInMatch)),
    __metadata("design:paramtypes", [typeorm_2.Repository, typeof (_a = typeof match_service_1.MatchService !== "undefined" && match_service_1.MatchService) === "function" ? _a : Object, typeof (_b = typeof player_service_1.PlayerService !== "undefined" && player_service_1.PlayerService) === "function" ? _b : Object])
], PlayerInMatchService);
//# sourceMappingURL=player_in_match.service.js.map