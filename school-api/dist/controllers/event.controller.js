"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let EventController = class EventController {
    constructor(eventRepository) {
        this.eventRepository = eventRepository;
    }
    async create(event) {
        return this.eventRepository.create(event);
    }
    async count(where) {
        return this.eventRepository.count(where);
    }
    async find(filter) {
        return this.eventRepository.find(filter);
    }
    async updateAll(event, where) {
        return this.eventRepository.updateAll(event, where);
    }
    async findById(id, filter) {
        return this.eventRepository.findById(id, filter);
    }
    async updateById(id, event) {
        await this.eventRepository.updateById(id, event);
    }
    async replaceById(id, event) {
        await this.eventRepository.replaceById(id, event);
    }
    async deleteById(id) {
        await this.eventRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/events', {
        responses: {
            '200': {
                description: 'Event model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Event) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Event, {
                    title: 'NewEvent',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EventController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/events/count', {
        responses: {
            '200': {
                description: 'Event model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Event)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EventController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/events', {
        responses: {
            '200': {
                description: 'Array of Event model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Event, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Event)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EventController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/events', {
        responses: {
            '200': {
                description: 'Event PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Event, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Event)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Event, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EventController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/events/{id}', {
        responses: {
            '200': {
                description: 'Event model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Event, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Event, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EventController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/events/{id}', {
        responses: {
            '204': {
                description: 'Event PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Event, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Event]),
    tslib_1.__metadata("design:returntype", Promise)
], EventController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/events/{id}', {
        responses: {
            '204': {
                description: 'Event PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Event]),
    tslib_1.__metadata("design:returntype", Promise)
], EventController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/events/{id}', {
        responses: {
            '204': {
                description: 'Event DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], EventController.prototype, "deleteById", null);
EventController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.EventRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.EventRepository])
], EventController);
exports.EventController = EventController;
//# sourceMappingURL=event.controller.js.map