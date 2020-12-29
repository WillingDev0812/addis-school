import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Feedback } from '../models';
import { FeedbackRepository } from '../repositories';
export declare class FeedbackController {
    feedbackRepository: FeedbackRepository;
    constructor(feedbackRepository: FeedbackRepository);
    create(feedback: Omit<Feedback, 'id'>): Promise<Feedback>;
    count(where?: Where<Feedback>): Promise<Count>;
    find(filter?: Filter<Feedback>): Promise<Feedback[]>;
    updateAll(feedback: Feedback, where?: Where<Feedback>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Feedback>): Promise<Feedback>;
    updateById(id: string, feedback: Feedback): Promise<void>;
    replaceById(id: string, feedback: Feedback): Promise<void>;
    deleteById(id: string): Promise<void>;
}
