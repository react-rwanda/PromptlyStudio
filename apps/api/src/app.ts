import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Import routes
import healthRoutes from './routes/health';
import codegenRoutes from './routes/codegen';
// import figmaRoutes from './routes/figma';
// import exportRoutes from './routes/export';

// Import middleware
import errorHandler from './middlewares/errorHandler';

const app: Application = express();

// Security middleware
app.use(helmet());

// CORS middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? process.env.FRONTEND_URL 
    : 'http://localhost:3000',
  credentials: true
}));

// Logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Root route
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'StackGenie API is running 🚀',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development'
  });
});

// API Routes
app.use('/api/health', healthRoutes);
app.use('/api/codegen', codegenRoutes);
// app.use('/api/figma', figmaRoutes);
// app.use('/api/export', exportRoutes);

// 404 handler
app.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    error: {
      message: `Route ${req.originalUrl} not found`
    }
  });
});

// Error handling middleware (must be last)
app.use(errorHandler);

export default app;