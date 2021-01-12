import {Entity, model, property} from '@loopback/repository';

@model()
export class Setting extends Entity {
  @property({
    type: 'boolean',
  })
  email_notification?: boolean;

  @property({
    type: 'boolean',
  })
  email_push_notification?: boolean;

  @property({
    type: 'boolean',
  })
  phone_calls?: boolean;

  @property({
    type: 'boolean',
  })
  message_notifications?: boolean;

  @property({
    type: 'boolean',
  })
  message_push_notifications?: boolean;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;


  constructor(data?: Partial<Setting>) {
    super(data);
  }
}

export interface SettingRelations {
  // describe navigational properties here
}

export type SettingWithRelations = Setting & SettingRelations;
