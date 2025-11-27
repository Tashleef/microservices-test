import { Injectable } from '@nestjs/common';
import { INotification } from './notification.interface';
import { notificationsData } from './notification.data';

@Injectable()
export class NotificationRepository {
  private notifications: INotification[];
  constructor() {
    this.notifications = notificationsData;
  }

  createNotification(notification: INotification) {
    this.notifications.push({
      ...notification,
      id: this.notifications.length + 1,
      createdAt: new Date(),
    });
    return { status: 'sent' };
  }

  findAll() {
    return this.notifications;
  }
}
