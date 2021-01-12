import {DefaultCrudRepository} from '@loopback/repository';
import {Setting, SettingRelations} from '../models';
import {MatchDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SettingRepository extends DefaultCrudRepository<
  Setting,
  typeof Setting.prototype.id,
  SettingRelations
> {
  constructor(
    @inject('datasources.match') dataSource: MatchDataSource,
  ) {
    super(Setting, dataSource);
  }
}
