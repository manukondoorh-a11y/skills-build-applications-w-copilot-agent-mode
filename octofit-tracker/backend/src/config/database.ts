import mongoose from 'mongoose';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
const db = mongoose.connection;

const startDatabase = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log('Connected to octofit_db');
  } catch (error) {
    console.error('Error connecting to octofit_db:', error);
    console.warn('Continuing without MongoDB connection for local API development.');
  }
};

void startDatabase();

db.on('error', (error) => {
  console.error('connection error:', error);
});

export default db;
