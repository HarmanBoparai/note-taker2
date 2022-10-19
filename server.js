//Import express package and declared other variables
const express = require('express');
const path = require('path');
const { clog } = require('./public/middleware/clog');

const notesjs =require('./routes/notes.js'); 

// Adding port
const app = express();
const PORT = process.env.PORT || 3001;


// Importing middleware "clog"
 app.use(clog);

//Using Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api',notesjs);
app.use(express.static('public'));

// Routes to index.html
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

//Routes to notes.html when run with /notes parameter
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);





