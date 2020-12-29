import { DefaultCrudRepository } from '@loopback/repository';
import { Feedback, FeedbackRelations } from '../models';
import { MatchDataSource } from '../datasources';
export declare class FeedbackRepository extends DefaultCrudRepository<Feedback, typeof Feedback.prototype.id, FeedbackRelations> {
    constructor(dataSource: MatchDataSource);
}
