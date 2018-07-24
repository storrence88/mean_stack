var mongoose = require('mongoose')
var Pet = mongoose.model('Pet') // We are retrieving this Schema from our Models, named 'Pet'

module.exports = {
    index: (request, response) => {
        Pet.find({}, (err, pets) => {
            if (err) {
                console.log(err);
                response.status(400).json(err.errors)
            }
            else {
                console.log(pets)
                response.json(pets);
            }
        }).sort({ type: 'asc', name: 'asc' });;
    },

    create: (request, response) => {
        console.log(request.body);
        var pet = new Pet({
            name: request.body.name,
            type: request.body.type,
            description: request.body.description,
            skill1: request.body.skill1,
            skill2: request.body.skill2,
            skill3: request.body.skill3
        });
        console.log(pet)
        pet.save((err) => {
            if (err) {
                console.log('Something went wrong', err.message);
                response.status(400).json(err.errors);
            }
            else {
                console.log('Successfully added a pet!');
                response.json(pet)
            }
        });
    },

    show: (request, response) => {
        console.log("The pet id requested is:", request.params.id);
        Pet.findOne({ _id: request.params.id }, (err, pet) => {
            if (err) {
                console.log(err);
                response.status(400).json(err.errors);
            }
            else {
                console.log(pet);
                response.json(pet);
            }
        });
    },

    update: (request, response) => {
        console.log('The pet id requested is:', request.params.id);
        Pet.update({ _id: request.params.id }, {
            name: request.body.name,
            type: request.body.type,
            description: request.body.description,
            skill1: request.body.skill1,
            skill2: request.body.skill2,
            skill3: request.body.skill3
        }, { runValidators: true, context: 'query' }, (err, pets) => {
            if (err) {
                console.log('There was an error', err);
                response.status(400).json(err.errors);
            }
            else {
                console.log('Successfully edited a pet!')
                response.json(pets);
            }
        });
    },

    destroy: (request, response) => {
        console.log('The pet id requested is:', request.params.id);
        Pet.remove({ _id: request.params.id }, (err, pet) => {
            if (err) {
                console.log(err)
            }
            else {
                console.log('Pet has successfully been removed!')
                response.json(pet)
            }
        });
    },

    like: (req, res) => {
        Pet.findOneAndUpdate(
            { _id: req.params.id }, { $inc: { 'likes': 1 } },
            { new: true },
            (err, pet) => {
                if (err) {
                    return res.status(400).json(err.errors);
                }
                else{
                    return res.json(pet);
                }
                
            }
        );
    }
}
