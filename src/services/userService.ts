import { User } from '../models/User';

const createUser = async (userData: { name?: string; email?: string; cpf?: string; phone?: string }) => {
  try {
    const user = await User.create(userData);
    return user;
  } catch (error) {
    throw new Error('Error creating user: ' + '');
  }
};

export default {
  createUser,
};
