import { NotificationRepository } from './notification.repository';
import { notificationsData } from './notification.data';

describe('NotificationRepository', () => {
  let repository: NotificationRepository;

  beforeEach(() => {
    repository = new NotificationRepository();
  });

  it('should create a notification and return status sent', () => {
    const newNotification = { userId: 1, message: 'Hello' };
    const result = repository.createNotification(newNotification);

    expect(result).toEqual({ status: 'sent' });
    expect(repository.findAll()).toContainEqual(
      expect.objectContaining({
        userId: 1,
        message: 'Hello',
      }),
    );
  });

  it('should return all notifications', () => {
    const allNotifications = repository.findAll();
    expect(allNotifications).toEqual(notificationsData);
  });
});
