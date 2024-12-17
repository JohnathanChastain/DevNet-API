import { Router } from 'express';
import userRoutes from './userRoutes';
import postRoutes from './thoughtRoutes';

const router = Router();

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

export default router;