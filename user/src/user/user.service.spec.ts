import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { HttpService } from '@nestjs/axios';
import { of } from 'rxjs';
import { BadRequestException } from '@nestjs/common';

describe('UserService', () => {
  let service: UserService;
  let repository: UserRepository;
  let httpService: HttpService;

  const mockRepository = {
    findAll: jest.fn(),
    createUser: jest.fn(),
    findByEmail: jest.fn(),
  };

  const mockHttpService = {
    post: jest.fn(),
  };

  beforeEach(() => {
    service = new UserService(mockRepository as any, mockHttpService as any);
  });

  it('should get all users', () => {
    const users = [
      { id: 1, name: 'Ali', email: 'ali@test.com', createdAt: new Date() },
    ];
    mockRepository.findAll.mockReturnValue(users);

    const result = service.getAll();
    expect(result).toEqual(users);
    expect(mockRepository.findAll).toHaveBeenCalledTimes(1);
  });

  it('should create a new user and send notification', async () => {
    const user = { name: 'Sara', email: 'sara@test.com' };
    const createdUser = { ...user, id: 1, createdAt: new Date() };

    mockRepository.findByEmail.mockReturnValue(undefined);
    mockRepository.createUser.mockReturnValue(createdUser);
    mockHttpService.post.mockReturnValue(of({ data: {} }));

    const result = await service.create(user as any);
    expect(result).toEqual(createdUser);
    expect(mockRepository.createUser).toHaveBeenCalledWith(user);
    expect(mockHttpService.post).toHaveBeenCalled();
  });

  it('should throw error if user already exists', async () => {
    const user = { name: 'Sara', email: 'sara@test.com' };
    mockRepository.findByEmail.mockReturnValue(user);

    await expect(service.create(user as any)).rejects.toThrow(
      BadRequestException,
    );
  });
});
