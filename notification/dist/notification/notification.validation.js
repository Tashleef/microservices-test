"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationValidation = void 0;
const common_1 = require("@nestjs/common");
const Joi = require("joi");
const joi_pipes_1 = require("../common/validation/joi.pipes");
let NotificationValidation = class NotificationValidation {
    async create(body) {
        const createNotification = Joi.object({
            userId: Joi.number().min(1).required(),
            message: Joi.string().required(),
        });
        return new joi_pipes_1.JoiValidationPipe(createNotification).transform(body);
    }
};
NotificationValidation = __decorate([
    (0, common_1.Injectable)()
], NotificationValidation);
exports.NotificationValidation = NotificationValidation;
//# sourceMappingURL=notification.validation.js.map