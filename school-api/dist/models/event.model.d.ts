import { Entity } from '@loopback/repository';
export declare class Event extends Entity {
    createdAt?: string;
    description?: string;
    image?: string;
    title?: string;
    totalDownloads?: string;
    id?: string;
    constructor(data?: Partial<Event>);
}
export interface EventRelations {
}
export declare type EventWithRelations = Event & EventRelations;
