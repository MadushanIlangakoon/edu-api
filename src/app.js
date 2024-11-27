const express = require('express');
require('./db'); // Initialize DB connection

const userRoutes = require('./routes/userRoutes');
const skillRoutes = require('./routes/skillRoutes');
const contentRoutes = require('./routes/contentRoutes');

const app = express();
app.use(express.json());

// API Routes
app.use('/api/users', userRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/content', contentRoutes);

module.exports = app;
