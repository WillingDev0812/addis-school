"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const authentication_1 = require("@loopback/authentication");
let FeedbackController = class FeedbackController {
    constructor(feedbackRepository) {
        this.feedbackRepository = feedbackRepository;
    }
    async create(feedback) {
        return this.feedbackRepository.create(feedback);
    }
    async count(where) {
        return this.feedbackRepository.count(where);
    }
    async find(filter) {
        return this.feedbackRepository.find(filter);
    }
    async updateAll(feedback, where) {
        return this.feedbackRepository.updateAll(feedback, where);
    }
    async findById(id, filter) {
        return this.feedbackRepository.findById(id, filter);
    }
    async updateById(id, feedback) {
        await this.feedbackRepository.updateById(id, feedback);
    }
    async replaceById(id, feedback) {
        await this.feedbackRepository.replaceById(id, feedback);
    }
    async deleteById(id) {
        await this.feedbackRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/feedbacks', {
        responses: {
            '200': {
                description: 'Feedback model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Feedback) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Feedback, {
                    title: 'NewFeedback',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FeedbackController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/feedbacks/count', {
        responses: {
            '200': {
                description: 'Feedback model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Feedback)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FeedbackController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/feedbacks', {
        responses: {
            '200': {
                description: 'Array of Feedback model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Feedback, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Feedback)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FeedbackController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/feedbacks', {
        responses: {
            '200': {
                description: 'Feedback PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Feedback, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Feedback)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Feedback, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FeedbackController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/feedbacks/{id}', {
        responses: {
            '200': {
                description: 'Feedback model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Feedback, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Feedback, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FeedbackController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/feedbacks/{id}', {
        responses: {
            '204': {
                description: 'Feedback PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Feedback, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Feedback]),
    tslib_1.__metadata("design:returntype", Promise)
], FeedbackController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/feedbacks/{id}', {
        responses: {
            '204': {
                description: 'Feedback PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Feedback]),
    tslib_1.__metadata("design:returntype", Promise)
], FeedbackController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/feedbacks/{id}', {
        responses: {
            '204': {
                description: 'Feedback DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], FeedbackController.prototype, "deleteById", null);
FeedbackController = tslib_1.__decorate([
    authentication_1.authenticate('jwt'),
    tslib_1.__param(0, repository_1.repository(repositories_1.FeedbackRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.FeedbackRepository])
], FeedbackController);
exports.FeedbackController = FeedbackController;
//# sourceMappingURL=feedback.controller.js.map