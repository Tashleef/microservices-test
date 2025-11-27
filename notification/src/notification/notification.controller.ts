import { Body, Controller, Get, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { INotification } from './notification.interface';
import { NotificationValidation } from './notification.validation';

@Controller('notifications')
export class NotificationController {
  constructor(
    private readonly notificationService: NotificationService,
    private readonly notificationValidation: NotificationValidation,
  ) {}

  @Post('')
  createNotification(@Body() body: INotification) {
    this.notificationValidation.create(body);
    return this.notificationService.create(body);
  }

  @Get('')
  getAllNotifications() {
    return this.notificationService.getAll();
  }
}
