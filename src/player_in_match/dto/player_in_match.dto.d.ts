import { Match } from 'src/matches/entities/match.entity';
import { Player } from 'src/players/entities/player.entity';
export declare class PlayerInMatchDto {
    matchEvent: string;
    point: number;
    player: Player;
    match: Match;
}
