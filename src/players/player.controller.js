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
exports.PlayerController = void 0;
const common_1 = require("@nestjs/common");
const dto_1 = require("./dto");
const player_service_1 = require("./player.service");
let PlayerController = exports.PlayerController = class PlayerController {
    constructor(playerService) {
        this.playerService = playerService;
    }
    getLeague() {
        return Object.values(dto_1.Positions);
    }
    createPlayer(PlayerDto) {
        return this.playerService.createPlayer(PlayerDto);
    }
    findAllPlayer() {
        return this.playerService.findAllPlayer();
    }
    findPlayerById(id) {
        return this.playerService.findPlayerById(id);
    }
    updatePlayer(id, playerDto) {
        return this.playerService.updatePlayer(id, playerDto);
    }
    deletePlayer(id) {
        return this.playerService.deletePlayer(id);
    }
    restorePlayer(id) {
        return this.playerService.restorePlayer(id);
    }
};
__decorate([
    (0, common_1.Get)('/positions'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlayerController.prototype, "getLeague", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.PlayerDto]),
    __metadata("design:returntype", void 0)
], PlayerController.prototype, "createPlayer", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlayerController.prototype, "findAllPlayer", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlayerController.prototype, "findPlayerById", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.PlayerDto]),
    __metadata("design:returntype", void 0)
], PlayerController.prototype, "updatePlayer", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlayerController.prototype, "deletePlayer", null);
__decorate([
    (0, common_1.Patch)('/restore/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlayerController.prototype, "restorePlayer", null);
exports.PlayerController = PlayerController = __decorate([
    (0, common_1.Controller)('player'),
    __metadata("design:paramtypes", [player_service_1.PlayerService])
], PlayerController);
//# sourceMappingURL=player.controller.js.map