import {DefaultCrudRepository} from '@loopback/repository';
import {Service, ServiceRelations} from '../models';
import {MatchDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ServiceRepository extends DefaultCrudRepository<
  Service,
  typeof Service.prototype.id,
  ServiceRelations
> {
  constructor(
    @inject('datasources.match') dataSource: MatchDataSource,
  ) {
    super(Service, dataSource);
  }
}
