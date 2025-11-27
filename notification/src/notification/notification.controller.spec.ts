import { Test, TestingModule } from '@nestjs/testing';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';

describe('NotificationController', () => {
  let controller: NotificationController;
  let service: NotificationService;

  const mockNotificationService = {
    create: jest.fn(),
    getAll: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotificationController],
      providers: [
        { provide: NotificationService, useValue: mockNotificationService },
      ],
    }).compile();

    controller = module.get<NotificationController>(NotificationController);
    service = module.get<NotificationService>(NotificationService);
  });

  it('should return all notifications', async () => {
    const mockNotifications = [
      { id: 1, userId: 1, message: 'Hello', createdAt: new Date() },
      { id: 2, userId: 2, message: 'Hi', createdAt: new Date() },
    ];

    mockNotificationService.getAll.mockReturnValue(mockNotifications);

    const result = await controller.getAllNotifications();

    expect(result).toEqual(mockNotifications);
    expect(service.getAll).toHaveBeenCalledTimes(1);
  });

  it('should create a notification', async () => {
    const newNotification = { userId: 1, message: 'Test message' };
    const createdNotification = { ...newNotification, id: 1, createdAt: new Date() };

    mockNotificationService.create.mockReturnValue(createdNotification);

    const result = await controller.createNotification(newNotification);

    expect(result).toEqual(createdNotification);
    expect(service.create).toHaveBeenCalledWith(newNotification);
  });
});
