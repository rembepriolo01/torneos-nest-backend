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
exports.PlayerInMatchController = void 0;
const common_1 = require("@nestjs/common");
const player_service_1 = require("../players/player.service");
const mailer_1 = require("../../config/mailer");
const dto_1 = require("./dto");
const player_in_match_service_1 = require("./player_in_match.service");
let PlayerInMatchController = exports.PlayerInMatchController = class PlayerInMatchController {
    constructor(playerInMatchService, playerService) {
        this.playerInMatchService = playerInMatchService;
        this.playerService = playerService;
        this.playerEmailsList = [];
    }
    onModuleInit() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const players = yield this.playerService.findAllPlayer();
                if (players) {
                    this.playerEmailsList = players.map(player => player.email);
                }
            }
            catch (error) {
                console.error('Error al cargar la lista de jugadores:', error);
            }
        });
    }
    sendEmail(data, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const playerEmails = this.playerEmailsList;
            if (playerEmails.length === 0) {
                return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                    message: 'No se encontraron direcciones de correo electrónico'
                });
            }
            const { htmlTemplate } = data;
            try {
                yield new Promise((resolve, reject) => {
                    mailer_1.transporter.sendMail({
                        from: '"TournApp" <rembepriolo@gmail.com>',
                        to: 'rembepriolo@hotmail.com',
                        subject: 'Notificación Estadísticas del Jugador ✔',
                        text: 'Las Estadísticas del Jugador',
                        html: htmlTemplate
                    }, (error, info) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            resolve(info);
                        }
                    });
                });
                return response.status(common_1.HttpStatus.OK).json({
                    message: 'Los correos se han enviado exitosamente'
                });
            }
            catch (error) {
                console.error(error);
                if (error.code === 'EENVELOPE') {
                    return response.status(common_1.HttpStatus.REQUEST_TIMEOUT).json({
                        message: 'No hay destinatarios definidos'
                    });
                }
                if (error.code === 'ESOCKET') {
                    return response.status(common_1.HttpStatus.REQUEST_TIMEOUT).json({
                        message: 'Tiempo de espera agotado al conectar al servidor de correo'
                    });
                }
                else {
                    return response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
                        message: 'Error enviando los correos electrónicos'
                    });
                }
            }
        });
    }
    getMatchEvent() {
        return Object.values(dto_1.MatchEvent);
    }
    createPlayerInMatch(playerInMatchDto) {
        return this.playerInMatchService.createPlayerInMatch(playerInMatchDto);
    }
    findAllPlayerInMatch() {
        return this.playerInMatchService.findAllPlayerInMatch();
    }
    findPlayerInMatchById(id) {
        return this.playerInMatchService.findPlayerInMatchById(id);
    }
    updatePlayerInMatch(id, playerInMatchDto) {
        return this.playerInMatchService.updatePlayerInMatch(id, playerInMatchDto);
    }
    deletePlayerInMatch(id) {
        return this.playerInMatchService.deletePlayerInMatch(id);
    }
    restoreMatchent(id) {
        return this.playerInMatchService.restoreMatchent(id);
    }
};
__decorate([
    (0, common_1.Post)('/sendEmail'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PlayerInMatchController.prototype, "sendEmail", null);
__decorate([
    (0, common_1.Get)('/match_event'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlayerInMatchController.prototype, "getMatchEvent", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.PlayerInMatchDto]),
    __metadata("design:returntype", void 0)
], PlayerInMatchController.prototype, "createPlayerInMatch", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlayerInMatchController.prototype, "findAllPlayerInMatch", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlayerInMatchController.prototype, "findPlayerInMatchById", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.PlayerInMatchDto]),
    __metadata("design:returntype", void 0)
], PlayerInMatchController.prototype, "updatePlayerInMatch", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlayerInMatchController.prototype, "deletePlayerInMatch", null);
__decorate([
    (0, common_1.Patch)('/restore/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlayerInMatchController.prototype, "restoreMatchent", null);
exports.PlayerInMatchController = PlayerInMatchController = __decorate([
    (0, common_1.Controller)('player_in_match'),
    __metadata("design:paramtypes", [player_in_match_service_1.PlayerInMatchService, typeof (_a = typeof player_service_1.PlayerService !== "undefined" && player_service_1.PlayerService) === "function" ? _a : Object])
], PlayerInMatchController);
//# sourceMappingURL=player_in_match.controller.js.map