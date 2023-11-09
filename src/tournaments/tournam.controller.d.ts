import { TournamDto } from './dto';
import { Leagues } from './dto/leagues.enum';
import { Locations } from './dto/locations.enum';
import { TournamService } from './tournam.service';
export declare class TournamController {
    private readonly tournamService;
    constructor(tournamService: TournamService);
    getLeague(): Leagues[];
    getLocation(): Locations[];
    createTournam(tournamDto: TournamDto): Promise<import("./entities/tournam.entity").Tournam>;
    findAllTournam(): Promise<import("./entities/tournam.entity").Tournam[]>;
    findTournamById(id: string): Promise<import("./entities/tournam.entity").Tournam>;
    updateTournam(id: string, tournamDto: TournamDto): Promise<import("./entities/tournam.entity").Tournam>;
    deleteTournam(id: string): Promise<{
        message: string;
    }>;
    restoreTournament(id: string): Promise<import("./entities/tournam.entity").Tournam>;
}
