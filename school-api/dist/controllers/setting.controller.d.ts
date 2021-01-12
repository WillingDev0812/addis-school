import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Setting } from '../models';
import { SettingRepository } from '../repositories';
export declare class SettingController {
    settingRepository: SettingRepository;
    constructor(settingRepository: SettingRepository);
    create(setting: Omit<Setting, 'id'>): Promise<Setting>;
    count(where?: Where<Setting>): Promise<Count>;
    find(filter?: Filter<Setting>): Promise<Setting[]>;
    updateAll(setting: Setting, where?: Where<Setting>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Setting>): Promise<Setting>;
    updateById(id: string, setting: Setting): Promise<void>;
    replaceById(id: string, setting: Setting): Promise<void>;
    deleteById(id: string): Promise<void>;
}
