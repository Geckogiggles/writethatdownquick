const express = require('express');

// Import our modular routers for /tips and /feedback
const indexRouter = require('./index');
const notesRouter = require('./notes');

const app = express();

app.use('/tips', tipsRouter);
app.use('/feedback', feedbackRouter);

module.exports = app;
