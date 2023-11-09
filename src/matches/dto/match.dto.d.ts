import { Team } from 'src/teams/entities/team.entity';
import { Tournam } from 'src/tournaments/entities/tournam.entity';
export declare class MatchDto {
    index: number;
    dateMatch: Date;
    field: string;
    referee: string;
    tournam: Tournam;
    localTeam: Team;
    visitingTeam: Team;
}
