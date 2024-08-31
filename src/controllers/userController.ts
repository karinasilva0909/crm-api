import { Request, Response } from 'express';
import userService from '../services/userService';

const createUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: '' });
  }
};

export default {
  createUser,
};
