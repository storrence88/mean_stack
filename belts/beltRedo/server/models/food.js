var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
// var Schema = mongoose.Schema;

var FoodSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, "Must enter a restaurant name"],
        minlength: [3, "Name must be at least 3 characters"]
    },
    type: {
        type: String,
        required: [true, "Must enter a retaurant type!"],
        minlength: [3, "Type must be atleast 3 characters"]
    },
    review: [{
        review_name: {
            type: String,
            minlength: [3, 'Name must be at least 3 chacters']
        },
        rating: {
            type: Number
        },
        comment: {
            type: String,
            minlength: [3, 'Comment must be at least 3 characters']
        }
    }]
}, { timestamps: true });

// var ReviewSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         minlength: [3, "Name must be at least 3 characters"]
//     },
//     rating: {
//         type: Number
//     },
//     comment: {
//         type: String,
//         minlength: [3, "Review must be at least 3 characters"]
//     }
// });

// PetSchema.pre('save', function (next) {
//     let pet = this;
//     pet.name = pet.name.toLowerCase();
//     pet.type = pet.type.toLowerCase();
//     next();
// });

FoodSchema.plugin(uniqueValidator, { message: 'Error. The restaurant name {VALUE} already exists.' });
mongoose.model('Food', FoodSchema); // We are setting this Schema in our Models as 'Food'
// mongoose.model('Review', ReviewSchema); // We are setting this Schema in our Models as 'Review'