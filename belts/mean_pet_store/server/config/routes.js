var mongoose = require('mongoose')
var Pet = mongoose.model('Pet') // We are retrieving this Schema from our Models, named 'Author'
var pets = require('../controllers/pets.js')
var path = require('path');

module.exports = (app) => {

    // Index request to show all pets
    app.get('/pets', pets.index);

    // Retrieve a specific pet by ID
    app.get('/pets/:id', pets.show);

    // POST route to create a pet
    app.post('/pets', pets.create);

    // Update a specific pet by ID
    app.patch('/pets/:id', pets.update);

    // Delete a specific pet by ID
    app.delete('/pets/:id', pets.destroy);

    // Like a pet
    app.get('/pets/:id/like', pets.like);

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./client/dist/client/index.html"))
    });
}