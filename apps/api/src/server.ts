import { Server } from 'http';
import app from './app';

const PORT: number = parseInt(process.env.PORT || '5000', 10);

const server: Server = app.listen(PORT, () => {
  console.log(`🚀 StackGenie API Server running on http://localhost:${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`❤️  Health check: http://localhost:${PORT}/api/health`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err: Error) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  server.close(() => {
    process.exit(1);
  });
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('📴 SIGTERM received. Shutting down gracefully...');
  server.close(() => {
    console.log('🚫 Process terminated');
  });
});

export default server;