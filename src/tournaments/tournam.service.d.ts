import { AuthService } from 'src/auth/auth.service';
import { Repository } from 'typeorm';
import { TournamDto } from './dto';
import { Tournam } from './entities/tournam.entity';
export declare class TournamService {
    private readonly tournamRepository;
    private readonly authService;
    constructor(tournamRepository: Repository<Tournam>, authService: AuthService);
    createTournam(tournamDto: TournamDto): Promise<Tournam>;
    findAllTournam(): Promise<Tournam[]>;
    findTournamById(id: string): Promise<Tournam>;
    updateTournam(id: string, tournamData: Partial<Tournam>): Promise<Tournam | undefined>;
    deleteTournam(id: string): Promise<{
        message: string;
    }>;
    restoreTournament(id: string): Promise<Tournam | undefined>;
}
