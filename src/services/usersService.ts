import { User } from '../models/User';
import { UserService } from '../models/UserService';

const createUser = async (userData: { name?: string; email?: string; phone?: string }) => {
  try {
    console.log('Aqui = ' + userData);
    const user = await User.create(userData);
    return user;
  } catch (error) {
    throw new Error('Error creating user: ' + (error as Error).message);
  }
};

const linkUserService = async (userId: number, serviceId: number) => {
  try {
    const user = await User.findByPk(userId);

    if (!user) {
      throw new Error(`User with id ${userId} does not exist.`);
    }

    const userService = await UserService.create({ userId, serviceId });
    return userService;
  } catch (error) {
    throw new Error('Error linking user and service: ' + (error as Error).message);
  }
};

const getUserServices = async (userId: number) => {
  try {
    const userService = await UserService.findAll({ where: { userId } });
    return userService;
  } catch (error) {
    throw new Error('Error fetching user services: ' + (error as Error).message);
  }
};

const getUser = async (phone: string) => {
  try {
    const userService = await User.findAll({ where: { phone } });
    return userService;
  } catch (error) {
    throw new Error('Error fetching user services: ' + (error as Error).message);
  }
};

export default {
  createUser,
  linkUserService,
  getUserServices,
  getUser,
};
