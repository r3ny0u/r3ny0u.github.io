const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const projectRoutes = require('./routes/projectRoutes');
const internRoutes = require('./routes/internRoutes');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/myWebsite';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

app.use('/api', projectRoutes);
app.use('/api', internRoutes);

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
