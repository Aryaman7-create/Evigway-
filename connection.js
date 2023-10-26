const mongoose = require('mongoose');

const connectToMongoDB = () => {
  mongoose.connect(
    'mongodb+srv://aryamanKanwar234:abcdefgh1234@evigway.9keyadf.mongodb.net/',
    { useNewUrlParser: true, useUnifiedTopology: true }
  );

  mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB Atlas');
  });

  mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
  });
};

module.exports = connectToMongoDB;
