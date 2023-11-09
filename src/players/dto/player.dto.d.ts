import { Team } from 'src/teams/entities/team.entity';
export declare class PlayerDto {
    name: string;
    birthDate: Date;
    playerNumber: number;
    position: string;
    isCaptain: boolean;
    email: string;
    team: Team;
}
