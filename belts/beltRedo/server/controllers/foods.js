var mongoose = require('mongoose')
var Food = mongoose.model('Food') // We are retrieving this Schema from our Models, named 'Food'
// var Review = mongoose.model('Review') // We are retrieving this Schema from our Models, named 'Review'

module.exports = {
    index: (request, response) => {
        Food.find({}, (err, food) => {
            if (err) {
                console.log(err);
                response.status(400).json(err.errors)
            }
            else {
                console.log(food)
                response.json(food);
            }
        }).sort({ name: 'asc' });;
    },

    create: (request, response) => {
        console.log(request.body);
        var food = new Food({
            name: request.body.name,
            type: request.body.type,
            review: {
                review_name: request.body.review_name,
                rating: request.body.rating,
                comment: request.body.comment
            }
        });
        console.log(food)
        food.save((err) => {
            if (err) {
                console.log('Something went wrong', err.message);
                response.status(400).json(err.errors);
            }
            else {
                console.log('Successfully added a restaurant!');
                response.json(food)
            }
        });
    },

    show: (request, response) => {
        console.log("The restaurant id requested is:", request.params.id);
        Food.findOne({ _id: request.params.id }, (err, food) => {
            if (err) {
                console.log(err);
                response.status(400).json(err.errors);
            }
            else {
                console.log(food);
                response.json(food);
            }
        });
    },

    update: (request, response) => {
        console.log('The restaurant id requested is:', request.params.id);
        Food.update({ _id: request.params.id }, {
            name: request.body.name,
            type: request.body.type,
        }, { runValidators: true, context: 'query' }, (err, food) => {
            if (err) {
                console.log('There was an error', err);
                response.status(400).json(err.errors);
            }
            else {
                console.log('Successfully edited a restaurant!')
                response.json(food);
            }
        });
    },

    destroy: (request, response) => {
        console.log('The restaurant id requested is:', request.params.id);
        Food.remove({ _id: request.params.id }, (err, food) => {
            if (err) {
                console.log(err)
            }
            else {
                console.log('Restaurant has successfully been removed!')
                response.json(food)
            }
        });
    },

    review: (request, response) => {
        console.log('The restaurant id requested is:', request.params.id);
        console.log('******************', request.body);
        Food.update({ _id: request.params.id }, {$push: {review_name: request.body.review_name, rating: request.body.rating, comment: request.body.comment}}, 
            { runValidators: true, context: 'query' }, (err, food) => {
            if (err) {
                console.log('There was an error', err);
                response.status(400).json(err.errors);
            }
            else {
                console.log('Successfully edited a restaurant!')
                response.json(food);
            }
        });
    },

    

    // like: (req, res) => {
    //     Pet.findOneAndUpdate(
    //         { _id: req.params.id }, { $inc: { 'likes': 1 } },
    //         { new: true },
    //         (err, pet) => {
    //             if (err) {
    //                 return res.status(400).json(err.errors);
    //             }
    //             else {
    //                 return res.json(pet);
    //             }

    //         }
    //     );
    // }
}
