import { DefaultCrudRepository } from '@loopback/repository';
import { Setting, SettingRelations } from '../models';
import { MatchDataSource } from '../datasources';
export declare class SettingRepository extends DefaultCrudRepository<Setting, typeof Setting.prototype.id, SettingRelations> {
    constructor(dataSource: MatchDataSource);
}
