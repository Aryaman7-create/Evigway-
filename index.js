const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const connectToMongoDB = require('./connection');
const app = express();

connectToMongoDB();

// // Connect to MongoDB Atlas
// mongoose.connect(
//   'mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster.mongodb.net/your-database',
//   { useNewUrlParser: true, useUnifiedTopology: true }
// );

// // Create Mongoose Schema for your model
// const YourModel = mongoose.model('YourModel', {
//   // Define your schema fields here
// });

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/api'));

// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
