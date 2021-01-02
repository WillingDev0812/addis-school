import {DefaultCrudRepository} from '@loopback/repository';
import {Event, EventRelations} from '../models';
import {MatchDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class EventRepository extends DefaultCrudRepository<
  Event,
  typeof Event.prototype.id,
  EventRelations
> {
  constructor(
    @inject('datasources.match') dataSource: MatchDataSource,
  ) {
    super(Event, dataSource);
  }
}
