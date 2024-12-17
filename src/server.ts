import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/index.js';
import userRoutes from './routes/api/userRoutes.js';
import thoughtRoutes from './routes/api/thoughtRoutes.js';
router.use('/user', userRoutes);
router.use('/thought', thoughtRoutes);


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(router);

// Connect to MongoDB
const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
    console.log(process.env.MONGODB_URI);
    throw new Error('Environment variable MONGODB_URI is not defined');
}

mongoose.connect(mongoUri)
    .then(() => console.log('MongoDB connected'))
    .catch((err: unknown) => {
        console.error('Failed to connect to MongoDB:', err);
    });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});