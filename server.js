const express = require('express');

// Import our modular routers for /index and /notes
const apiRouter = require('./index');
const notesRouter = require('./notes');
const app = express();

app.use('/index', apiRouter);
app.use('/notes', notesRouter);
// TODO: Initialize diagnostics route

module.exports = app;
