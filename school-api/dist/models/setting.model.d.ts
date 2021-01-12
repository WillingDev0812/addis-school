import { Entity } from '@loopback/repository';
export declare class Setting extends Entity {
    email_notification?: boolean;
    email_push_notification?: boolean;
    phone_calls?: boolean;
    message_notifications?: boolean;
    message_push_notifications?: boolean;
    id?: string;
    constructor(data?: Partial<Setting>);
}
export interface SettingRelations {
}
export declare type SettingWithRelations = Setting & SettingRelations;
