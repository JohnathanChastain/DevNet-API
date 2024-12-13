import express from 'express';
import userRoutes from './api/userRoutes';
import postRoutes from './api/thoughtsRoutes';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

export default router;