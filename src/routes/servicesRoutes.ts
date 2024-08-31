import express from 'express';
import servicesController from '../controllers/servicesController';

const router = express.Router();

router.post('/services', servicesController.createService);
router.get('/services', servicesController.getAllServices);

export default router;
