var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var PetSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, "Must enter a pet name"],
        minlength: [3, "Name must be at least 3 characters"]
    },
    type: {
        type: String,
        required: [true, "Must enter a pet type!"],
        minlength: [3, "Type must be atleast 3 characters"]
    },
    description: {
        type: String,
        required: [true, "Must enter a description"],
        minlength: [3, "Description must be atleast 3 characters"]
    },
    skill1: {
        type: String
    },
    skill2: {
        type: String
    },
    skill3: {
        type: String
    },
    likes: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

PetSchema.pre('save', function(next){
    let pet = this;
    pet.name = pet.name.toLowerCase();
    pet.type = pet.type.toLowerCase();
    next();
});

PetSchema.plugin(uniqueValidator, { message: 'Error. The name {VALUE} already exists.' });
mongoose.model('Pet', PetSchema); // We are setting this Schema in our Models as 'Pet'