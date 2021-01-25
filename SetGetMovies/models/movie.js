const mongoose = require('mongoose');
const Schema = mongoose.Schema;  //constructor for our schemas

//Define the structure for the document
const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true,
    },
    yearReleased: {
        type: Number
    }
});

//Create a model based on the schema; model 'movie' looks for collection 'movies'
const Movie = mongoose.model('movie', movieSchema); //whatever you put in the quotes here, it's looking for the collection that is the plural of that

module.exports = Movie;