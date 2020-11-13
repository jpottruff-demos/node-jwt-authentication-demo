const express = require('express');
const jwt = require('jsonwebtoken');

// Initalize the app
const app = express();


// Routes
app.get('/api', (req, res) => {
    res.json({msg: 'Welcome to the API'});
});


// Port Set up
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Starting server on port ${PORT}...`));