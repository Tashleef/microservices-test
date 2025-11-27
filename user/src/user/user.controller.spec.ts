import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserValidation } from './user.validation';

describe('UserController - GET /users', () => {
  let userController: UserController;
  let userService: UserService;

  const mockUserService = {
    getAll: jest.fn(),
  };

  const mockUserValidation = {
    create: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        { provide: UserService, useValue: mockUserService },
        { provide: UserValidation, useValue: mockUserValidation },
      ],
    }).compile();

    userController = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  it('should return all users', async () => {
    const mockUsers = [
      { id: 1, name: 'Ali', email: 'ali@gmail.com', createdAt: new Date() },
      { id: 2, name: 'Sara', email: 'sara@gmail.com', createdAt: new Date() },
    ];

    mockUserService.getAll.mockReturnValue(mockUsers);

    const result = await userController.getAllUsers();

    expect(result).toEqual(mockUsers);
    expect(userService.getAll).toHaveBeenCalledTimes(1);
  });
});
