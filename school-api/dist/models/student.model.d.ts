import { Entity } from '@loopback/repository';
export declare class Student extends Entity {
    name?: string;
    email?: string;
    location?: string;
    phone?: string;
    register_date?: string;
    id?: string;
    constructor(data?: Partial<Student>);
}
export interface StudentRelations {
}
export declare type StudentWithRelations = Student & StudentRelations;
