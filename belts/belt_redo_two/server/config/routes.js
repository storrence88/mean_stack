var mongoose = require('mongoose')
var Movie = mongoose.model('Movie') // We are retrieving this Schema from our Models, named 'Movie'
var Review = mongoose.model('Review') // We are retrieving this Schema from our Models, named 'Movie'
var movies = require('../controllers/movies.js')
var path = require('path');

module.exports = (app) => {

    // Index request to show all restaurants
    app.get('/movies', movies.index);

    // Retrieve a specific restaurant by ID
    app.get('/movies/:id', movies.show);

    // POST route to create a restaurant
    app.post('/movies', movies.create);

    // Update a specific restaurant by ID
    app.patch('/movies/:id', movies.create_review);

    // Delete a specific restaurant by ID
    app.delete('/movies/:id', movies.destroy);

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./client/dist/client/index.html"))
    });
}