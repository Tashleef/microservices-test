import { INotification } from './notification.interface';
export declare class NotificationRepository {
    private notifications;
    constructor();
    createNotification(notification: INotification): {
        status: string;
    };
    findAll(): INotification[];
}
