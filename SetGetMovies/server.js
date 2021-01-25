const express = require('express')
const Mongoose = require('mongoose');
const Movie = require('./models/movie')

//Our express app for serving
const app = express();

const dbConnection = "mongodb+srv://rklesius:rachel1234@movie-cluster.5jxgj.mongodb.net/moviedb?retryWrites=true&w=majority"

Mongoose.connect(dbConnection, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(8080))
    .catch((err) => console.log(err));

app.get('/add-movie', (req, res) => {
    // const movie = new Movie({
    //     title: 'Alien',
    //     director: 'Ridley Scott',
    //     yearReleased: 1979
    // });
    // const movie = new Movie({
    //     title: 'Interstellar',
    //     director: 'Christopher Nolan',
    //     yearReleased: 2014
    // });
    const movie = new Movie({
        title: '2001: A Space Odyssey',
        director: 'Stanley Kubrick',
        yearReleased: 1968
    });
    movie.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        });
})

app.get('/movie-list', (req, res) => {
    //get all the documents in the movie collection
    Movie.find()
        .then((results) => {
            res.send(results);
        })
        .catch((err) => {
            console.log(err)
        })
})

app.get('/find-alien', (req, res) => {
    Movie.findById("600e41d1e9dfe03b0c04661c")
        .then((results) => {
            res.send(results);
        })
        .catch((err) => {
            console.log(err)
        })
})