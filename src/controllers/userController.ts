import { Request, Response } from 'express';
import usersService from '../services/usersService';

const createUser = async (req: Request, res: Response) => {
  try {
    const user = await usersService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const updateUser = async (req: Request, res: Response) => {
  const phone = req.body.phone;

  const updateData: any = {};

  if (req.body.name && req.body.name.trim() !== '') {
    updateData.name = req.body.name;
  }
  if (req.body.email && req.body.email.trim() !== '') {
    updateData.email = req.body.email;
  }
  if (req.body.cpf && req.body.cpf.trim() !== '') {
    updateData.cpf = req.body.cpf;
  }
  if (req.body.step && req.body.step.trim() !== '') {
    updateData.step = req.body.step;
  }

  try {
    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ error: 'Nenhum dado válido para atualizar.' });
    }

    const updatedUser = await usersService.updateUser(phone, updateData);
    if (updatedUser) {
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ error: 'Usuário não encontrado.' });
    }
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const createUserService = async (req: Request, res: Response) => {
  try {
    const phone = req.body.phone;
    const userData = {
      phone: req.body.phone,
      name: req.body.name || null,
      email: req.body.email || null,
      cpf: req.body.cpf || null,
    };
    const user = await usersService.createUser(userData);
    const userService = await usersService.linkUserService(parseInt(user.dataValues.id), parseInt(req.body.service));
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const linkUserService = async (req: Request, res: Response) => {
  const { userId, serviceId } = req.body;
  try {
    const userService = await usersService.linkUserService(userId, serviceId);
    res.status(201).json(userService);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const getUserServices = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.userId);
  try {
    const userService = await usersService.getUserServices(userId);
    res.status(200).json(userService);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const getUser = async (req: Request, res: Response) => {
  const phone = req.params.phone;
  try {
    const user = await usersService.getUser(phone);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export default {
  createUser,
  createUserService,
  linkUserService,
  getUserServices,
  getUser,
  updateUser,
};
