import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors'
import morgan from 'morgan'
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

import homeRoutes from './routes/homeRoutes.js';
import aboutRoutes from './routes/aboutRoutes.js';
import portfolioRoutes from './routes/portfolioRoutes.js';

dotenv.config();

connectDB()

const PORT = process.env.PORT || 8000;

const app = express();

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.use(express.json())

app.use('/home', homeRoutes);
app.use('/api/about', aboutRoutes);
app.use('/api/portfolio', portfolioRoutes);

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))