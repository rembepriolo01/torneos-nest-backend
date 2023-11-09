import { User } from "src/auth/entities/user.entity";
import { Match } from "src/matches/entities/match.entity";
import { Player } from "src/players/entities/player.entity";
import { Team } from "src/teams/entities/team.entity";
import { Leagues } from "../dto/leagues.enum";
import { Locations } from "../dto/locations.enum";
export declare class Tournam {
    tournamId: string;
    name: string;
    location: Locations;
    league: Leagues;
    startDate: Date;
    endDate: Date;
    createdAt: Date;
    updatedAt: Date;
    deleteAt: Date;
    matchs: Match[];
    teams: Team[];
    players: Player[];
    user: User;
}
