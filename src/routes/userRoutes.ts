import express from 'express';
import userController from '../controllers/userController';

const router = express.Router();

router.post('/users', userController.createUser);
router.put('/user/:phone/:step', userController.getUser);
router.get('/user/:phone', userController.getUser);
router.post('/user/service', userController.createUserService);
router.post('/user-services', userController.linkUserService);
router.get('/user-services/:userId', userController.getUserServices);

export default router;
