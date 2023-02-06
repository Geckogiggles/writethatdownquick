const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile, writeToFile } = require('../../helpers/fsUtils');

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
//this read and append uses the path from the server, not the index.js file
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
//colon is basically saying var = whatever is after the colon
//params is what you call variables in your route
notes.delete('/notes/:id', (req, res) =>{
console.log(req.params.id)
readFromFile('./db/db.json').then((data) => {
  var noteArray = JSON.parse(data);
  var newArray = noteArray.filter(note => req.params.id !== note.id )
  writeToFile('./db/db.json', newArray)
  res.json(noteArray)
})
})

module.exports = notes;
