import { DefaultCrudRepository } from '@loopback/repository';
import { Service, ServiceRelations } from '../models';
import { MatchDataSource } from '../datasources';
export declare class ServiceRepository extends DefaultCrudRepository<Service, typeof Service.prototype.id, ServiceRelations> {
    constructor(dataSource: MatchDataSource);
}
