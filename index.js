const express = require('express');
const jwt = require('jsonwebtoken');

// Initalize the app
const app = express();


// Routes
app.get('/api', (req, res) => {
    res.json({msg: 'Welcome to the API'});
});

// Gets a token back for mock user
app.post('/api/login', (req, res) => {
    // Mock User (this would usually be authentication via DB)
    const user = {
        id: 1,
        name: 'Randy Savage',
        email: "ohhhhhhya@gmail.com"
    }


    // NOTE: using asynchronous verios
    jwt.sign({user}, 'secretkey', { expiresIn: '30s'}, (err, token) => {
        res.json({token})
    });
});

// Protected Route
app.post('/api/posts', verifyToken, (req, res) => {
    // Verify
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        // console.log(req.token)
        // console.log(authData)
        // console.log(err)
        if (err) {
            console.log('nope')
            res.sendStatus(403);
        } else {
            res.json({
                msg: 'Post created...', 
                authData
            });
        }
    });


});


// Middleware function
function verifyToken (req, res, next) {
    // FORMAT of TOKEN
    // Authorization: Bearer <access_token>

    // 1. Get the auth header value
    const bearerHeader = req.header('authorization');
    
    // 2. Check to see if its undefined
    if (typeof bearerHeader !== 'undefined') {
        // Split at the space (see format)
        const bearer = bearerHeader.split(' ');
        // Get token from array
        const bearerToken = bearer[1];
        // Set the token
        req.token = bearerToken;
        // Call the next middle ware
        next();
    } else {
        // Forbidden
        res.sendStatus(403)
    }
}

// Port Set up
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Starting server on port ${PORT}...`));