import { PlayerInMatch } from 'src/player_in_match/entities/player_in_match.entity';
import { Player } from 'src/players/entities/player.entity';
import { Team } from 'src/teams/entities/team.entity';
import { Tournam } from 'src/tournaments/entities/tournam.entity';
export declare class Match {
    id: string;
    index: number;
    dateMatch: Date;
    field: string;
    referee: string;
    createdAt: Date;
    updatedAt: Date;
    deleteAt: Date;
    tournam: Tournam;
    localTeam: Team;
    visitingTeam: Team;
    players: Player[];
    playerInMatches: PlayerInMatch[];
}
