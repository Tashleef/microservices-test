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
exports.NotificationRepository = void 0;
const common_1 = require("@nestjs/common");
const notification_data_1 = require("./notification.data");
let NotificationRepository = class NotificationRepository {
    constructor() {
        this.notifications = notification_data_1.notificationsData;
    }
    createNotification(notification) {
        this.notifications.push(Object.assign(Object.assign({}, notification), { id: this.notifications.length + 1, createdAt: new Date() }));
        return { status: 'sent' };
    }
    findAll() {
        return this.notifications;
    }
};
NotificationRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], NotificationRepository);
exports.NotificationRepository = NotificationRepository;
//# sourceMappingURL=notification.repository.js.map