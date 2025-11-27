import { NotificationService } from './notification.service';
import { INotification } from './notification.interface';
import { NotificationValidation } from './notification.validation';
export declare class NotificationController {
    private readonly notificationService;
    private readonly notificationValidation;
    constructor(notificationService: NotificationService, notificationValidation: NotificationValidation);
    createNotification(body: INotification): {
        status: string;
    };
    getAllNotifications(): INotification[];
}
