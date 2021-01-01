import { Entity } from '@loopback/repository';
import { Address } from "./address.model";
export declare class Student extends Entity {
    name?: string;
    email?: string;
    avatarUrl?: string;
    phone?: string;
    register_date?: string;
    id?: string;
    address?: Address;
    constructor(data?: Partial<Student>);
}
export interface StudentRelations {
}
export declare type StudentWithRelations = Student & StudentRelations;
