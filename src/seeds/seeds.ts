import mongoose from 'mongoose';
import user from '../models/user.js';
import thought from '../models/thought.js';

// Connect to MongoDB
const mongoURI = 'mongodb://localhost:27017/SocialNetwork';

mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Create seed data
const users = [
    {
        name: 'John Doe',
        email: 'email',
        password: 'password',
    },

    {
        name: 'Jane Doe',
        email: 'email',
        password: 'password',
    },
];

const thoughts = [
    {
        user: 'John Doe',
        text: 'Hello, world!',
    },
];

// Insert seed data
user.insertMany(users)
    .then(() => console.log('Users added'))
    .catch(err => console.log(err));

thought.insertMany(thoughts)

    .then(() => console.log('Thoughts added'))
    .catch(err => console.log(err));

// Disconnect
mongoose.disconnect();