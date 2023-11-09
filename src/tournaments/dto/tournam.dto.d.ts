import { User } from 'src/auth/entities/user.entity';
import { Leagues } from './leagues.enum';
import { Locations } from './locations.enum';
export declare class TournamDto {
    name: string;
    location: Locations;
    league: Leagues;
    startDate: Date;
    endDate: Date;
    user: User;
}
