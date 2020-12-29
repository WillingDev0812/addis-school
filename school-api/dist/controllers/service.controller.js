"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const authentication_1 = require("@loopback/authentication");
let ServiceController = class ServiceController {
    constructor(serviceRepository) {
        this.serviceRepository = serviceRepository;
    }
    async create(service) {
        return this.serviceRepository.create(service);
    }
    async count(where) {
        return this.serviceRepository.count(where);
    }
    async find(filter) {
        return this.serviceRepository.find(filter);
    }
    async updateAll(service, where) {
        return this.serviceRepository.updateAll(service, where);
    }
    async findById(id, filter) {
        return this.serviceRepository.findById(id, filter);
    }
    async updateById(id, service) {
        await this.serviceRepository.updateById(id, service);
    }
    async replaceById(id, service) {
        await this.serviceRepository.replaceById(id, service);
    }
    async deleteById(id) {
        await this.serviceRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/services', {
        responses: {
            '200': {
                description: 'Service model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Service) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Service, {
                    title: 'NewService',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ServiceController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/services/count', {
        responses: {
            '200': {
                description: 'Service model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Service)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ServiceController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/services', {
        responses: {
            '200': {
                description: 'Array of Service model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Service, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Service)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ServiceController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/services', {
        responses: {
            '200': {
                description: 'Service PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Service, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Service)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Service, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ServiceController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/services/{id}', {
        responses: {
            '200': {
                description: 'Service model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Service, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Service, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ServiceController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/services/{id}', {
        responses: {
            '204': {
                description: 'Service PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Service, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Service]),
    tslib_1.__metadata("design:returntype", Promise)
], ServiceController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/services/{id}', {
        responses: {
            '204': {
                description: 'Service PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Service]),
    tslib_1.__metadata("design:returntype", Promise)
], ServiceController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/services/{id}', {
        responses: {
            '204': {
                description: 'Service DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ServiceController.prototype, "deleteById", null);
ServiceController = tslib_1.__decorate([
    authentication_1.authenticate('jwt'),
    tslib_1.__param(0, repository_1.repository(repositories_1.ServiceRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ServiceRepository])
], ServiceController);
exports.ServiceController = ServiceController;
//# sourceMappingURL=service.controller.js.map