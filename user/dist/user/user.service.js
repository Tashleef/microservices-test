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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const user_repository_1 = require("./user.repository");
const rxjs_1 = require("rxjs");
const service_config_1 = require("../common/config/service.config");
let UserService = class UserService {
    constructor(userRepository, httpClient) {
        this.userRepository = userRepository;
        this.httpClient = httpClient;
    }
    async create(user) {
        const existUser = this.userRepository.findByEmail(user.email);
        if (existUser) {
            throw new common_1.BadRequestException('User already exists');
        }
        const createdUser = this.userRepository.createUser(user);
        try {
            const notificationServiceUrl = service_config_1.serviceConfig.notificationServiceUrl;
            console.log(notificationServiceUrl);
            await (0, rxjs_1.firstValueFrom)(this.httpClient.post(`${notificationServiceUrl}/notifications`, {
                userId: createdUser.id,
                message: `Welcome ${createdUser.name}! Your account has been created.`,
            }));
        }
        catch (error) {
            console.log('error', error);
        }
        return createdUser;
    }
    getAll() {
        return this.userRepository.findAll();
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        axios_1.HttpService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map