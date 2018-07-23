var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: [true, "Please enter a movie title"],
        minlength: [3, "Movie title must be at least 3 characters"]
    },
    review: [{
        ref: 'Review',
        type: mongoose.Schema.Types.ObjectId
    }]
}, { timestamps: true });

var ReviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
        minlength: [3, "Name must be at least 3 characters"]
    },
    rating: {
        type: Number,
        required: [true, "Please enter a rating"],
        min: [1, "Rating must be a number between 1 and 5"],
        max: [5, "Rating must be a number between 1 and 5"]
    },
    comment: {
        type: String,
        required: [true, "Please enter a review"],
        minlength: [3, "Review must be at least 3 characters"]
    },
    movie: {
        ref: 'Movie',
        type: mongoose.Schema.Types.ObjectId
    }
}, { timestamps: true });

MovieSchema.plugin(uniqueValidator, { message: 'Error. The movie title {VALUE} already exists.' });
mongoose.model('Movie', MovieSchema); // We are setting this Schema in our Models as 'Movie'
mongoose.model('Review', ReviewSchema); // We are setting this Schema in our Models as 'Review'
