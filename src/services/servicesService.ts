import { Service } from '../models/Service';

const createService = async (serviceData: { name: string; description?: string }) => {
  try {
    const service = await Service.create(serviceData);
    return service;
  } catch (error) {
    throw new Error('Error creating service: ' + '');
  }
};

const getAllServices = async () => {
  try {
    const services = await Service.findAll();
    return services;
  } catch (error) {
    throw new Error('Error fetching services: ' + '');
  }
};

export default {
  createService,
  getAllServices,
};
