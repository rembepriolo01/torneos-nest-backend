import { Match } from "src/matches/entities/match.entity";
import { PlayerInMatch } from "src/player_in_match/entities/player_in_match.entity";
import { Team } from "src/teams/entities/team.entity";
export declare class Player {
    playerId: string;
    name: string;
    birthDate: Date;
    playerNumber: number;
    position: string;
    isCaptain: boolean;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    deleteAt: Date;
    team: Team;
    matchs: Match[];
    playerInMatches: PlayerInMatch[];
}
