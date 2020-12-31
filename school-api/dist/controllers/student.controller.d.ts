import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Student } from '../models';
import { StudentRepository } from '../repositories';
export declare class StudentController {
    studentRepository: StudentRepository;
    constructor(studentRepository: StudentRepository);
    create(student: Omit<Student, 'id'>): Promise<Student>;
    count(where?: Where<Student>): Promise<Count>;
    find(filter?: Filter<Student>): Promise<Student[]>;
    updateAll(student: Student, where?: Where<Student>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Student>): Promise<Student>;
    updateById(id: string, student: Student): Promise<void>;
    replaceById(id: string, student: Student): Promise<void>;
    deleteById(id: string): Promise<void>;
}
