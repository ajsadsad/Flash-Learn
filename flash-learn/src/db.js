const mongoose = require('mongoose');

// MongoDB Atlas connection string
const connectionString = process.env.MONGODB;

// Connect to MongoDB Atlas
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Get the default connection
const db = mongoose.connection;

// Event handlers for database connection
db.on('connected', () => {
  console.log('Connected to MongoDB Atlas');
});

db.on('error', (err) => {
  console.error(`MongoDB Atlas connection error: ${err}`);
});

db.on('disconnected', () => {
  console.warn('Disconnected from MongoDB Atlas');
});

// Export the database connection
module.exports = db;