import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
import router from './routes/index';
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