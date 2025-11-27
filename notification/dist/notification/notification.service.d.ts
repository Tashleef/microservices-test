import { NotificationRepository } from './notification.repository';
import { INotification } from './notification.interface';
export declare class NotificationService {
    private readonly notificationRepository;
    constructor(notificationRepository: NotificationRepository);
    create(notification: INotification): {
        status: string;
    };
    getAll(): INotification[];
}
