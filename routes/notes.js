//Packages required for the application
const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const fs = require("fs");
const {v4: uuidv4 } = require('uuid');

// GET Route for retrieving all the notes
notes.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });

// POST Route for a new notes
    notes.post('/notes', (req, res) => {
        console.log(req.body);
      
        const { text, title } = req.body;
      
        if (req.body) {
          const newNote = {
            text,
            title,
            note_id: uuidv4(),
          };
      
          readAndAppend(newNote, './db/db.json');
          res.json(`Note added successfully 🚀`);
        } else {
          res.error('Error in adding note');
        }
      });
    

module.exports = notes;

