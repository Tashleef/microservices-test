import { UserRepository } from './user.repository';
import { usersData } from './user.data';

describe('UserRepository', () => {
  let repository: UserRepository;

  beforeEach(() => {
    repository = new UserRepository();
  });

  it('should create a user', () => {
    const user = { id: 0, name: 'Ali', email: 'ali@test.com', createdAt: new Date() };
    const result = repository.createUser(user);

    expect(result).toHaveProperty('id');
    expect(repository.findAll()).toContainEqual(result);
  });

  it('should find user by email', () => {
    const user = { id: 0, name: 'Sara', email: 'sara@test.com', createdAt: new Date() };
    repository.createUser(user);

    const found = repository.findByEmail('sara@test.com');
    expect(found).toEqual(expect.objectContaining({ email: 'sara@test.com' }));
  });

  it('should return all users', () => {
    const allUsers = repository.findAll();
    expect(allUsers).toEqual(usersData);
  });
});
