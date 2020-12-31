import { DefaultCrudRepository } from '@loopback/repository';
import { Student, StudentRelations } from '../models';
import { MatchDataSource } from '../datasources';
export declare class StudentRepository extends DefaultCrudRepository<Student, typeof Student.prototype.id, StudentRelations> {
    constructor(dataSource: MatchDataSource);
}
