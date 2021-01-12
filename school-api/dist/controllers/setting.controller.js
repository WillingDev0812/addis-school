"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SettingController = class SettingController {
    constructor(settingRepository) {
        this.settingRepository = settingRepository;
    }
    async create(setting) {
        return this.settingRepository.create(setting);
    }
    async count(where) {
        return this.settingRepository.count(where);
    }
    async find(filter) {
        return this.settingRepository.find(filter);
    }
    async updateAll(setting, where) {
        return this.settingRepository.updateAll(setting, where);
    }
    async findById(id, filter) {
        return this.settingRepository.findById(id, filter);
    }
    async updateById(id, setting) {
        await this.settingRepository.updateById(id, setting);
    }
    async replaceById(id, setting) {
        await this.settingRepository.replaceById(id, setting);
    }
    async deleteById(id) {
        await this.settingRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/settings', {
        responses: {
            '200': {
                description: 'Setting model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Setting) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Setting, {
                    title: 'NewSetting',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/settings/count', {
        responses: {
            '200': {
                description: 'Setting model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Setting)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/settings', {
        responses: {
            '200': {
                description: 'Array of Setting model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Setting, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Setting)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/settings', {
        responses: {
            '200': {
                description: 'Setting PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Setting, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Setting)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Setting, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/settings/{id}', {
        responses: {
            '200': {
                description: 'Setting model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Setting, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Setting, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/settings/{id}', {
        responses: {
            '204': {
                description: 'Setting PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Setting, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Setting]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/settings/{id}', {
        responses: {
            '204': {
                description: 'Setting PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Setting]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/settings/{id}', {
        responses: {
            '204': {
                description: 'Setting DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], SettingController.prototype, "deleteById", null);
SettingController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.SettingRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.SettingRepository])
], SettingController);
exports.SettingController = SettingController;
//# sourceMappingURL=setting.controller.js.map