// backend/server.js
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app'); // your express app

// load env from backend/.env (works regardless of working directory)
dotenv.config({ path: path.join(__dirname, '.env') });

// basic logs (redact sensitive data when sharing logs)
console.log('cwd:', process.cwd());
console.log('__dirname:', __dirname);
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('PORT:', process.env.PORT);
console.log('MONGO_URI (before connect):', !!process.env.MONGO_URI ? '[REDACTED]' : process.env.MONGO_URI);

if (!process.env.MONGO_URI) {
  console.error('FATAL ERROR: MONGO_URI is not defined. Add MONGO_URI to your backend/.env file or environment variables.');
  process.exit(1);
}

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  }
};

connectDB();

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server is working on http://localhost:${PORT}`);
});

// handle unhandled promise rejections gracefully
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Promise Rejection:', err);
  server.close(() => process.exit(1));
});
