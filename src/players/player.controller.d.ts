import { PlayerDto, Positions } from './dto';
import { PlayerService } from './player.service';
export declare class PlayerController {
    private readonly playerService;
    constructor(playerService: PlayerService);
    getLeague(): Positions[];
    createPlayer(PlayerDto: PlayerDto): Promise<import("./entities/player.entity").Player>;
    findAllPlayer(): Promise<import("./entities/player.entity").Player[]>;
    findPlayerById(id: string): Promise<import("./entities/player.entity").Player>;
    updatePlayer(id: string, playerDto: PlayerDto): Promise<import("./entities/player.entity").Player>;
    deletePlayer(id: string): Promise<{
        message: string;
    }>;
    restorePlayer(id: string): Promise<import("./entities/player.entity").Player>;
}
