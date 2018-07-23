var mongoose = require('mongoose')
var Movie = mongoose.model('Movie') // We are retrieving this Schema from our Models, named 'Movie'
var Review = mongoose.model('Review') // We are retrieving this Schema from our Models, named 'Review'

module.exports = {

    index: (request, response) => {
        Movie.find({}).populate('review').exec((err, movie) => {
            if(err){
                console.log(err)
                return response.status(400).json(err.errors);
            }
            else{
                console.log(movie)
                return response.json(movie);
            }
        });
    },

    // index: (request, response) => {
    //     Movie.find({}, (err, movie) => {
    //         if (err) {
    //             console.log(err);
    //             response.status(400).json(err.errors)
    //         }
    //         else {
    //             console.log(movie)
    //             response.json(movie);
    //         }
    //     }).sort({ title: 'asc' });;
    // },

    // create: (request, response) => {
    //     console.log(request.body);
    //     var movie = new Movie({
    //         title: request.body.name,
    //         review: [{
    //             name: request.body.name,
    //             rating: request.body.rating,
    //             comment: request.body.comment
    //         }]
    //     });
    //     console.log(movie)
    //     movie.save((err) => {
    //         if (err) {
    //             console.log('Something went wrong', err.message);
    //             response.status(400).json(err.errors);
    //         }
    //         else {
    //             console.log('Successfully added a restaurant!');
    //             response.json(food)
    //         }
    //     });
    // },

    create: (request, response) => {
        console.log(request.body);
        var movie = new Movie({
            title: request.body.name,
        });
        movie.save((err) => {
            if (err) {
                console.log('Something went wrong', err.message);
                response.status(400).json(err.errors);
            }
            else {
                var review = new Review({
                    name: request.body.name,
                    rating: request.body.rating,
                    comment: request.body.comment
                });
                review.save((err) => {
                    if (err){
                        console.log('Something went wrong', err.message);
                        response.status(400).json(err.errors);
                    }
                    else{
                        Movie.findOneAndUpdate({ _id: request.params.id }, { $push: { reviews: review._id}},
                        {runValidators: true, context: 'query' }, (err, movie) => {
                            if(err){
                                console.log("There was an error", err);
                                reponse.status(400).json(err.errors);
                            }
                            else{
                                console.log("Succesfully create a movie!");
                                repsonse.json(movie);
                            }
                        })
                    }
                })
            }
        });
    },

    show: (request, response) => {
        console.log("The movie id requested is:", request.params.id);
        Movie.findOne({ _id: request.params.id }, (err, movie) => {
            if (err) {
                console.log(err);
                response.status(400).json(err.errors);
            }
            else {
                console.log(movie);
                response.json(movie);
            }
        });
    },

    create_review: (request, response) => {
        console.log('The movie id requested is:', request.params.id);
        var review = new Review({
            name: request.body.name,
            rating: request.body.rating,
            comment: request.body.comment
        });
        review.save((err) => {
            if (err){
                console.log('Something went wrong', err.message);
                response.status(400).json(err.errors);
            }
            else{
                Movie.update({ _id: request.params.id }, { $push: { name: request.body.name, rating: request.body.rating, comment: request.body.comment}},
                {runValidators: true, context: 'query' }, (err, movie) => {
                    if(err){
                        console.log("There was an error", err);
                        reponse.status(400).json(err.errors);
                    }
                    else{
                        console.log("Succesfully create a movie!");
                        repsonse.json(movie);
                    }
                })
            }
        });
    },    

    destroy: (request, response) => {
        console.log('The movie id requested is:', request.params.id);
        Movie.remove({ _id: request.params.id }, (err, movie) => {
            if (err) {
                console.log(err)
            }
            else {
                console.log('Movie has successfully been removed!')
                response.json(movie)
            }
        });
    },
}
