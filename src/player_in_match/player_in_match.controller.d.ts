import { OnModuleInit } from '@nestjs/common';
import { PlayerService } from 'src/players/player.service';
import { MatchEvent, PlayerInMatchDto } from './dto';
import { PlayerInMatchService } from './player_in_match.service';
export declare class PlayerInMatchController implements OnModuleInit {
    private readonly playerInMatchService;
    private readonly playerService;
    playerEmailsList: string[];
    constructor(playerInMatchService: PlayerInMatchService, playerService: PlayerService);
    onModuleInit(): Promise<void>;
    sendEmail(data: {
        htmlTemplate: string;
    }, response: any): Promise<any>;
    getMatchEvent(): MatchEvent[];
    createPlayerInMatch(playerInMatchDto: PlayerInMatchDto): Promise<import("./entities/player_in_match.entity").PlayerInMatch>;
    findAllPlayerInMatch(): Promise<import("./entities/player_in_match.entity").PlayerInMatch[]>;
    findPlayerInMatchById(id: string): Promise<import("./entities/player_in_match.entity").PlayerInMatch>;
    updatePlayerInMatch(id: string, playerInMatchDto: PlayerInMatchDto): Promise<import("./entities/player_in_match.entity").PlayerInMatch>;
    deletePlayerInMatch(id: string): Promise<{
        message: string;
    }>;
    restoreMatchent(id: string): Promise<import("./entities/player_in_match.entity").PlayerInMatch>;
}
