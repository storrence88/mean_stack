var mongoose = require('mongoose')
var Food = mongoose.model('Food') // We are retrieving this Schema from our Models, named 'Author'
var foods = require('../controllers/foods.js')
var path = require('path');

module.exports = (app) => {

    // Index request to show all restaurants
    app.get('/foods', foods.index);

    // Retrieve a specific restaurant by ID
    app.get('/foods/:id', foods.show);

    // POST route to create a restaurant
    app.post('/foods', foods.create);

    // Update a specific restaurant by ID
    app.patch('/foods/:id', foods.update);

    // Delete a specific restaurant by ID
    app.delete('/foods/:id', foods.destroy);

    // Add a new review for restaurants
    app.patch('/foods/:id/review', foods.review);

    // Like a pet
    // app.get('/foods/:id/like', foods.like);

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./client/dist/client/index.html"))
    });
}