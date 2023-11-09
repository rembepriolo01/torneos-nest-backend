import { Match } from 'src/matches/entities/match.entity';
import { Player } from 'src/players/entities/player.entity';
export declare class PlayerInMatch {
    id: string;
    matchEvent: string;
    point: number;
    createdAt: Date;
    updatedAt: Date;
    deleteAt: Date;
    player: Player;
    match: Match;
}
