import { MatchDto } from './dto';
import { MatchService } from './match.service';
export declare class MatchController {
    private readonly matchService;
    constructor(matchService: MatchService);
    createMatch(matchDto: MatchDto): Promise<import("./entities/match.entity").Match>;
    findAllMatch(): Promise<import("./entities/match.entity").Match[]>;
    findMatchById(id: string): Promise<import("./entities/match.entity").Match>;
    updateMatch(id: string, matchDto: MatchDto): Promise<import("./entities/match.entity").Match>;
    deleteMatch(id: string): Promise<{
        message: string;
    }>;
    restoreMatchent(id: string): Promise<import("./entities/match.entity").Match>;
}
