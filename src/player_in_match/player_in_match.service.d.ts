import { MatchService } from 'src/matches/match.service';
import { PlayerService } from 'src/players/player.service';
import { Repository } from 'typeorm';
import { PlayerInMatchDto } from './dto';
import { PlayerInMatch } from './entities/player_in_match.entity';
export declare class PlayerInMatchService {
    private readonly playerInMatchRepository;
    private readonly matchService;
    private readonly playerService;
    constructor(playerInMatchRepository: Repository<PlayerInMatch>, matchService: MatchService, playerService: PlayerService);
    createPlayerInMatch(matchDto: PlayerInMatchDto): Promise<PlayerInMatch>;
    findAllPlayerInMatch(): Promise<PlayerInMatch[]>;
    findPlayerInMatchById(id: string): Promise<PlayerInMatch>;
    updatePlayerInMatch(id: string, matchData: Partial<PlayerInMatch>): Promise<PlayerInMatch | undefined>;
    deletePlayerInMatch(id: string): Promise<{
        message: string;
    }>;
    restoreMatchent(id: string): Promise<PlayerInMatch | undefined>;
}
