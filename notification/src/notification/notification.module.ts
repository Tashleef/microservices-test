import { Module } from "@nestjs/common";
import { NotificationController } from "./notification.controller";
import { NotificationService } from "./notification.service";
import { NotificationRepository } from "./notification.repository";
import { NotificationValidation } from "./notification.validation";

@Module({
	controllers: [NotificationController],
	providers: [NotificationService, NotificationRepository, NotificationValidation],
})
export class NotificationModule {}
