import { Entity } from '@loopback/repository';
export declare class Feedback extends Entity {
    id?: string;
    comment?: string;
    rate?: string;
    constructor(data?: Partial<Feedback>);
}
export interface FeedbackRelations {
}
export declare type FeedbackWithRelations = Feedback & FeedbackRelations;
