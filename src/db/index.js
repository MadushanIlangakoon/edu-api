const mongoose = require('mongoose');
const dbURL = process.env.DB_URL || 'mongodb://localhost:27017/edu-api';

mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected successfully'))
  .catch((err) => console.error('Database connection error:', err));
