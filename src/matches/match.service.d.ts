import { TeamService } from 'src/teams/team.service';
import { Repository } from 'typeorm';
import { MatchDto } from './dto';
import { Match } from './entities/Match.entity';
import { TournamService } from 'src/tournaments/tournam.service';
export declare class MatchService {
    private readonly matchRepository;
    private readonly teamService;
    private readonly tournamService;
    constructor(matchRepository: Repository<Match>, teamService: TeamService, tournamService: TournamService);
    createMatch(matchDto: MatchDto): Promise<Match>;
    findAllMatch(): Promise<Match[]>;
    findMatchById(id: string): Promise<Match>;
    updateMatch(id: string, matchData: Partial<Match>): Promise<Match | undefined>;
    deleteMatch(id: string): Promise<{
        message: string;
    }>;
    restoreMatchent(id: string): Promise<Match | undefined>;
}
