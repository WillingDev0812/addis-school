"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackRepository = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const models_1 = require("../models");
const datasources_1 = require("../datasources");
const core_1 = require("@loopback/core");
let FeedbackRepository = class FeedbackRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(models_1.Feedback, dataSource);
    }
};
FeedbackRepository = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.match')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.MatchDataSource])
], FeedbackRepository);
exports.FeedbackRepository = FeedbackRepository;
//# sourceMappingURL=feedback.repository.js.map