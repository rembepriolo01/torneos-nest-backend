import { TeamDto } from './dto';
import { TeamService } from './team.service';
export declare class TeamController {
    private readonly teamService;
    constructor(teamService: TeamService);
    createTeam(teamDto: TeamDto): Promise<import("./entities/team.entity").Team>;
    findAllTeam(): Promise<import("./entities/team.entity").Team[]>;
    findTeamById(id: string): Promise<import("./entities/team.entity").Team>;
    updateTeam(id: string, teamDto: TeamDto): Promise<import("./entities/team.entity").Team>;
    deleteTeam(id: string): Promise<{
        message: string;
    }>;
    restoreTeam(id: string): Promise<import("./entities/team.entity").Team>;
}
