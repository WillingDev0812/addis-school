"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let StudentController = class StudentController {
    constructor(studentRepository) {
        this.studentRepository = studentRepository;
    }
    async create(student) {
        return this.studentRepository.create(student);
    }
    async count(where) {
        return this.studentRepository.count(where);
    }
    async find(filter) {
        return this.studentRepository.find(filter);
    }
    async updateAll(student, where) {
        return this.studentRepository.updateAll(student, where);
    }
    async findById(id, filter) {
        return this.studentRepository.findById(id, filter);
    }
    async updateById(id, student) {
        await this.studentRepository.updateById(id, student);
    }
    async replaceById(id, student) {
        await this.studentRepository.replaceById(id, student);
    }
    async deleteById(id) {
        await this.studentRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/students', {
        responses: {
            '200': {
                description: 'Student model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Student) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Student, {
                    title: 'NewStudent',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StudentController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/students/count', {
        responses: {
            '200': {
                description: 'Student model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Student)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StudentController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/students', {
        responses: {
            '200': {
                description: 'Array of Student model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Student, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Student)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StudentController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/students', {
        responses: {
            '200': {
                description: 'Student PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Student, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Student)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Student, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StudentController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/students/{id}', {
        responses: {
            '200': {
                description: 'Student model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Student, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Student, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], StudentController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/students/{id}', {
        responses: {
            '204': {
                description: 'Student PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Student, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Student]),
    tslib_1.__metadata("design:returntype", Promise)
], StudentController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/students/{id}', {
        responses: {
            '204': {
                description: 'Student PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Student]),
    tslib_1.__metadata("design:returntype", Promise)
], StudentController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/students/{id}', {
        responses: {
            '204': {
                description: 'Student DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], StudentController.prototype, "deleteById", null);
StudentController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.StudentRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.StudentRepository])
], StudentController);
exports.StudentController = StudentController;
//# sourceMappingURL=student.controller.js.map