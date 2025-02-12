import express from 'express';
import mongoose from 'mongoose';                                  
import dotenv from 'dotenv';
import router from './routes/user.route.js';

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
        process.exit(1);  // Stop the server on DB connection failure
    });

const app = express();

// Middleware for JSON parsing
app.use(express.json());

// Define routes before starting the server
app.use('/api/user', router);

// Start the server
app.listen(3000, () => {
    console.log("Server started on port 3000!!!");
});
