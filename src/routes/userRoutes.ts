// routes/userRoutes.ts
import express from 'express';
import userController from '../controllers/userController';

const router = express.Router();

router.post('/users', userController.createUser);

export default router;
