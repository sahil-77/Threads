import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/connectDB.js';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js';

import postRoutes from './routes/postRoutes.js';
import messageRoutes from './routes/messageRoutes.js';

import { v2 as cloudinary } from 'cloudinary';
dotenv.config();
connectDB();
const app = express();
const PORT = 5000;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(express.json({ limit: '10mb' })); //to parse json data in the req.body
app.use(express.urlencoded({ limit: '10mb', extended: true })); //to parse form data in re.body
app.use(cookieParser());

//Routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/messages', messageRoutes);

app.listen(PORT, () =>
  console.log(`Server Started at http://localhost:5000 heyy`),
);
