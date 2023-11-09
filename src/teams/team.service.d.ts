import { TournamService } from 'src/tournaments/tournam.service';
import { Repository } from 'typeorm';
import { TeamDto } from './dto';
import { Team } from './entities/team.entity';
export declare class TeamService {
    private readonly teamRepository;
    private readonly tournamService;
    constructor(teamRepository: Repository<Team>, tournamService: TournamService);
    createTeam(teamDto: TeamDto): Promise<Team>;
    findAllTeam(): Promise<Team[]>;
    findTeamById(id: string): Promise<Team>;
    updateTeam(id: string, teamData: Partial<Team>): Promise<Team | undefined>;
    deleteTeam(id: string): Promise<{
        message: string;
    }>;
    restoreTeam(id: string): Promise<Team | undefined>;
}
