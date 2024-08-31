import { Request, Response } from 'express';
import servicesService from '../services/servicesService';

const createService = async (req: Request, res: Response) => {
  try {
    const service = await servicesService.createService(req.body);
    res.status(201).json(service);
  } catch (error) {
    res.status(400).json({ error: '' });
  }
};

const getAllServices = async (req: Request, res: Response) => {
  try {
    const services = await servicesService.getAllServices();
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: '' });
  }
};

export default {
  createService,
  getAllServices,
};
