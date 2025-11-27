import { NotificationService } from './notification.service';
import { NotificationRepository } from './notification.repository';

describe('NotificationService', () => {
  let service: NotificationService;
  let repository: NotificationRepository;

  const mockRepository = {
    createNotification: jest.fn(),
    findAll: jest.fn(),
  };

  beforeEach(() => {
    service = new NotificationService(mockRepository as any);
  });

  it('should return all notifications', () => {
    const mockNotifications = [
      { id: 1, userId: 1, message: 'Hello', createdAt: new Date() },
    ];

    mockRepository.findAll.mockReturnValue(mockNotifications);

    const result = service.getAll();

    expect(result).toEqual(mockNotifications);
    expect(mockRepository.findAll).toHaveBeenCalledTimes(1);
  });

  it('should create a notification and return status sent', () => {
    const newNotification = { userId: 1, message: 'Test message' };
    mockRepository.createNotification.mockReturnValue({ status: 'sent' });

    const result = service.create(newNotification);

    expect(result).toEqual({ status: 'sent' });
    expect(mockRepository.createNotification).toHaveBeenCalledWith(newNotification);
  });
});
