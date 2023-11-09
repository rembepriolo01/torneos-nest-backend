import { Match } from "src/matches/entities/match.entity";
import { Player } from "src/players/entities/player.entity";
import { Tournam } from "src/tournaments/entities/tournam.entity";
export declare class Team {
    teamId: string;
    name: string;
    logo: string;
    coach: string;
    createdAt: Date;
    updatedAt: Date;
    deleteAt: Date;
    tournam: Tournam;
    players: Player[];
    localTeam: Match[];
    visitingTeam: Match[];
}
