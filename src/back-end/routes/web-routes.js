const express = require('express');
const router = express.Router();
const path = require('path');

// Routes for nagivation of webpage, a more complex setup would have the
// ability to navigate to a html page of each type of cheese in database

// redirect to index
router.get('/', (req, res) => {
    res.redirect('/home');
});

// default landing page
router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../../app/home/home.component.html'))
});

// Page for each cheese
// Ideally should be dynamically constructed, not a switch case.
router.get('/:cheese', (req, res) => {
    // constuct routes from database
    switch (req.url) {
        case "/gouda":
            res.writeHead(200);
            res.end()
        case "/cheddar":
            res.writeHead(200);
            res.end()
        case "/provolone":
            res.writeHead(200);
            res.end()
        case "/babybel":
            res.writeHead(200);
            res.end()
        case "/brie":
            res.writeHead(200);
            res.end()
        default:
            res.writeHead(404);
            res.end(JSON.stringify({error:"URL invalid"}));
    }
    var cheese = req.params.name;

    res.get('/' + cheese);
});

// return 404 page
router.get('', (req, res) => {
    res.send("404 - invalid url")
});

module.exports = { router };