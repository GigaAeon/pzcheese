const express = require('express');
const router = express.Router();

const fs = require("fs");
const path = require("path");
const path_data = "../database/data.json"

// Connect Database - Here just using a premade json, MongoDB or similar would be utilised ideally
var database;
fs.readFile(path.join(__dirname, path_data), 'utf8', (err, data) => {
    if (err) throw err;
    database = JSON.parse(data)
});

// CRUD FUNCTIONS FOR BACKEND
// Provides the ability to create, read, update and delete from the front-end

// CREATE
router.post('/newcheese', (req, res) => { 
    const {name, img, price, colour} = req.body;
    if (!name || !img || !price || !colour) {   
        return res.status(400).send('missing info to add cheese to db') // Could further break down what is missing.
    }
    if (!database.some(cheese  => cheese.name === name)) {  // If cheese name not in database, create a new entry and add it
        cheese_new = {"name": name, "img":img, "price":price, "colour":colour};
        database.push(cheese_new);
        res.status(201).send(cheese_new);
    } else {
        return res.status(400).send('cheese with that name already exists in database');
    }
});

// READ (all)
router.get('/cheeses', (req, res) => {
    res.json(database);
});

// READ (singular)
router.get('/cheeses/:name', (req, res) => {
    const cheese = database.findIndex(c = c.id === req.params.name);
    if (!cheese) {
        return res.status(404).send('Cheese with that name not found');
    }
    res.json(cheese);
});

// UPDATE
router.put('/updatecheese/:name', (req, res) => {
    const cheese = database.findIndex(c = c.id === req.params.name);
    if (!cheese) {
        return res.status(404).send('Cheese with that name not found');
    }
    const {name, img, price, colour}  = req.body;
    cheese.name = name || cheese.name;
    cheese.name = img || cheese.img;
    cheese.name = price || cheese.price;
    cheese.name = colour || cheese.colour;

    res.send(cheese)
});

// DELETE
router.delete('/deletecheese/:name', (req, res) => {
    const cheese_index = database.findIndex(c = c.id === req.params.name);
    if (cheese_index === -1) {
        return res.status(404).send('Cheese with that name not found');
    }
    cheese.splice(cheese_index, 1);
    res.status(204).send();
});


// TODO:: Utilise Swagger to automate documentation generateion
// Swagger failed to build in Docker, unsure how to progress
// d