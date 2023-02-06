const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../../helpers/fsUtils');

// GET Route for retrieving notes information
notes.get('/notes', (req, res) => {
  readFromFile('./db/db.json').then((data) =>
    res.json(JSON.parse(data))
  );
});

// POST Route for a error logging
notes.post('/notes', (req, res) => {
  console.log(req.body);

  // const { isValid, errors } = req.body;

  const payload = {
    id: uuidv4(),
    title: req.body.title,
    text: req.body.text
  };

  if (true) {
    readAndAppend(payload, './db/db.json');
    res.json({
        message: 'New note added 📝',
        id: payload.id,
    });
  } else {
    res.json({
      message: 'Note was not saved',
    });
  }
});

module.exports = notes;
