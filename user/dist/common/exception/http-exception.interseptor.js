"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionsFilter = void 0;
const common_1 = require("@nestjs/common");
let AllExceptionsFilter = class AllExceptionsFilter {
    constructor(logger) {
        this.logger = logger;
    }
    catch(exception, host) {
        var _a, _b, _c, _d, _e, _f;
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        let statusCode;
        let responseBody;
        console.log('exception constructor', exception);
        switch (exception.constructor) {
            case common_1.HttpException: {
                const httpException = exception;
                statusCode = httpException.getStatus();
                const response = httpException.getResponse();
                httpException.getResponse();
                responseBody = {
                    statusCode,
                    error: {
                        message: ((_b = (_a = response === null || response === void 0 ? void 0 : response.response) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.message) ||
                            ((_c = response === null || response === void 0 ? void 0 : response.response) === null || _c === void 0 ? void 0 : _c.message) ||
                            (response === null || response === void 0 ? void 0 : response.message),
                        code: ((_e = (_d = response === null || response === void 0 ? void 0 : response.response) === null || _d === void 0 ? void 0 : _d.error) === null || _e === void 0 ? void 0 : _e.code) ||
                            ((_f = response === null || response === void 0 ? void 0 : response.response) === null || _f === void 0 ? void 0 : _f.code) ||
                            (response === null || response === void 0 ? void 0 : response.code),
                    },
                    timestamp: new Date().toISOString(),
                    path: request.url,
                };
                break;
            }
            default: {
                const { message } = exception;
                statusCode = exception.status || 500;
                responseBody = {
                    statusCode: exception.status || 500,
                    error: {
                        message,
                        code: 101010,
                    },
                    timestamps: new Date().toISOString(),
                    path: request.url,
                };
                break;
            }
        }
        this.logMessage(request, responseBody.error, statusCode, exception);
        response.status(statusCode).json(responseBody);
    }
    logMessage(request, message, status, exception) {
        const clientPaths = [
            '/favicon.ico',
            '/robots.txt',
            '/manifest.json',
            '/static/',
            '/assets/',
        ];
        const isClientPath = clientPaths.some((path) => request.path.includes(path));
        const isClientError = status === 404 && (isClientPath || request.path.startsWith('/static/'));
        if (isClientError) {
            return;
        }
        if (status === 500) {
            this.logger.error(`End Request for ${request.path}`, `method=${request.method} status=${status} code_error=${message.code ? message.code : null} message=${message.message ? message.message : null}`, status >= 500 ? exception.stack : '');
        }
        else {
            this.logger.warn(`End Request for ${request.path}`, `method=${request.method} status=${status} code_error=${message.code ? message.code : null} message=${message.message ? message.message : null}`);
        }
    }
};
AllExceptionsFilter = __decorate([
    (0, common_1.Catch)(),
    __metadata("design:paramtypes", [Object])
], AllExceptionsFilter);
exports.AllExceptionsFilter = AllExceptionsFilter;
//# sourceMappingURL=http-exception.interseptor.js.map