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
exports.PlayerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const short_uuid_1 = require("short-uuid");
const team_service_1 = require("../teams/team.service");
const typeorm_2 = require("typeorm");
const player_entity_1 = require("./entities/player.entity");
let PlayerService = exports.PlayerService = class PlayerService {
    constructor(playerRepository, teamService) {
        this.playerRepository = playerRepository;
        this.teamService = teamService;
    }
    createPlayer(playerDto) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const { name, playerNumber, birthDate, email, team } = playerDto;
            const existingTeam = yield this.teamService.findTeamById(String(team));
            try {
                const league = (_a = existingTeam.tournam) === null || _a === void 0 ? void 0 : _a.league;
                const existingPlayer = yield this.playerRepository.findOne({
                    where: [{ playerNumber }, { email }],
                });
                if (existingPlayer) {
                    if (existingPlayer.email === email) {
                        throw new common_1.BadRequestException(`Ya existe un jugador con el correo electrónico: ${email}.`);
                    }
                }
                const birthDateObj = new Date(birthDate);
                const presentDate = new Date();
                const age = presentDate.getFullYear() - birthDateObj.getFullYear();
                if (age < 18 && league === 'VETERANO') {
                    throw new common_1.BadRequestException(`El jugador: ${name}. es menor de edad y no puede unirse a una liga de adultos.`);
                }
                const newPlayer = this.playerRepository.create(Object.assign(Object.assign({}, playerDto), { playerId: (0, short_uuid_1.generate)() }));
                return yield this.playerRepository.save(newPlayer);
            }
            catch (error) {
                console.error(error);
                if (error instanceof common_1.BadRequestException) {
                    throw error;
                }
                if (error.code === 'ER_DUP_ENTRY') {
                    throw new common_1.BadRequestException(`El Número ' ${playerNumber} ' ya está asignado`);
                }
                else {
                    throw new common_1.InternalServerErrorException('Something terrible happened while creating the player.');
                }
            }
        });
    }
    findAllPlayer() {
        return __awaiter(this, void 0, void 0, function* () {
            const playerData = yield this.playerRepository.find({
                order: { createdAt: 'ASC' },
            });
            if (!playerData || playerData.length == 0) {
                throw new common_1.NotFoundException('¡No se encontraron datos de jugadores!');
            }
            return playerData;
        });
    }
    findPlayerById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingPlayer = yield this.playerRepository.findOne({
                where: { playerId: id.toString() },
                relations: ['team.participations.tournam', 'playerInMatches'],
            });
            if (!existingPlayer) {
                throw new common_1.NotFoundException(`Jugador no encontrado`);
            }
            return existingPlayer;
        });
    }
    updatePlayer(id, playerDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const { position, playerNumber, email, team } = playerDto;
            yield this.teamService.findTeamById(String(team));
            const existingPlayer = yield this.playerRepository.findOne({
                where: [{ playerId: id.toString() }, { playerNumber }, { email }]
            });
            if (!existingPlayer) {
                throw new common_1.NotFoundException(`El jugador: ${id} no encontrado`);
            }
            if (existingPlayer) {
                if (existingPlayer.email === email) {
                    throw new common_1.BadRequestException(`Ya existe un jugador con el correo electrónico: ${email}.`);
                }
                if (existingPlayer.playerNumber === playerNumber) {
                    throw new common_1.BadRequestException(`El Número del Jugador: ${playerNumber} ¡ya existe!`);
                }
            }
            try {
                Object.assign(existingPlayer, playerDto);
                const updatePlayer = yield this.playerRepository.save(existingPlayer);
                const playerWithout = Object.assign({}, updatePlayer);
                delete playerWithout.createdAt;
                return playerWithout;
            }
            catch (error) {
                console.log(error);
                if ((error === null || error === void 0 ? void 0 : error.code) === 'WARN_DATA_TRUNCATED') {
                    throw new common_1.HttpException(`¡La posición: ${position} no existe!`, common_1.HttpStatus.BAD_REQUEST);
                }
                else {
                    throw new common_1.InternalServerErrorException('Something terrible happened while creating the player.');
                }
            }
        });
    }
    deletePlayer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const player = yield this.playerRepository.findOne({
                where: { playerId: id.toString() }
            });
            if (!player) {
                throw new common_1.NotFoundException(`El jugador: ${id} no encontrado`);
            }
            yield this.playerRepository.softRemove(player);
            return { message: `El jugador: ${player_entity_1.Player.name} deshabilitado` };
        });
    }
    restorePlayer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const player = yield this.playerRepository.findOne({
                where: { playerId: id.toString() },
                withDeleted: true,
            });
            if (!player) {
                throw new common_1.NotFoundException(`El jugador: ${id} no encontrado`);
            }
            if (player.deleteAt == null) {
                throw new common_1.NotFoundException(`El jugador: ${id} ya ha sido restaurado.`);
            }
            player.deleteAt = null;
            return this.playerRepository.save(player);
        });
    }
};
exports.PlayerService = PlayerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(player_entity_1.Player)),
    __metadata("design:paramtypes", [typeorm_2.Repository, typeof (_a = typeof team_service_1.TeamService !== "undefined" && team_service_1.TeamService) === "function" ? _a : Object])
], PlayerService);
//# sourceMappingURL=player.service.js.map