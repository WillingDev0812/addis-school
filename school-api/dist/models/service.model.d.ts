import { Entity } from '@loopback/repository';
export declare class Service extends Entity {
    name?: string;
    id?: string;
    description?: string;
    image?: string;
    detail?: string;
    category?: string;
    person_needed?: string;
    date?: string;
    price?: string;
    status?: string;
    constructor(data?: Partial<Service>);
}
export interface ServiceRelations {
}
export declare type ServiceWithRelations = Service & ServiceRelations;
