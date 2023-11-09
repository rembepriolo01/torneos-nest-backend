import { TeamService } from 'src/teams/team.service';
import { Repository } from 'typeorm';
import { PlayerDto } from './dto';
import { Player } from './entities/player.entity';
export declare class PlayerService {
    private readonly playerRepository;
    private readonly teamService;
    constructor(playerRepository: Repository<Player>, teamService: TeamService);
    createPlayer(playerDto: PlayerDto): Promise<Player>;
    findAllPlayer(): Promise<Player[]>;
    findPlayerById(id: string): Promise<Player>;
    updatePlayer(id: string, playerDto: Partial<Player>): Promise<Player | undefined>;
    deletePlayer(id: string): Promise<{
        message: string;
    }>;
    restorePlayer(id: string): Promise<Player | undefined>;
}
