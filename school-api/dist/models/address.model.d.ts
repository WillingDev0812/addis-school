import { Model } from '@loopback/repository';
export declare class Address extends Model {
    country?: string;
    state?: string;
    city?: string;
    street?: string;
    constructor(data?: Partial<Address>);
}
export interface AddressRelations {
}
export declare type AddressWithRelations = Address & AddressRelations;
