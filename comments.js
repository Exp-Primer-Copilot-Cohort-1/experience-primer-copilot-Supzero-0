// Create web server

// Imports
const express = require('express');
const app = express();
const port = 3000;

// Import comments
const comments = require('./comments');

// Set up static files
app.use(express.static('public'));

// Set up JSON parsing
app.use(express.json());

// Set up routes
app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.json(comment);
});

// Start server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});