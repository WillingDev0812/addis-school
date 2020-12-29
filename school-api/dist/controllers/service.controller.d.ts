import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Service } from '../models';
import { ServiceRepository } from '../repositories';
export declare class ServiceController {
    serviceRepository: ServiceRepository;
    constructor(serviceRepository: ServiceRepository);
    create(service: Omit<Service, 'id'>): Promise<Service>;
    count(where?: Where<Service>): Promise<Count>;
    find(filter?: Filter<Service>): Promise<Service[]>;
    updateAll(service: Service, where?: Where<Service>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Service>): Promise<Service>;
    updateById(id: string, service: Service): Promise<void>;
    replaceById(id: string, service: Service): Promise<void>;
    deleteById(id: string): Promise<void>;
}
