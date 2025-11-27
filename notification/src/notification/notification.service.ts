import { BadRequestException, Injectable } from '@nestjs/common';
import { NotificationRepository } from './notification.repository';
import { INotification } from './notification.interface';

@Injectable()
export class NotificationService {
  constructor(
    private readonly notificationRepository: NotificationRepository,
  ) {}

  create(notification: INotification) {
    return this.notificationRepository.createNotification(notification);
  }

  getAll() {
    return this.notificationRepository.findAll();
  }
}
