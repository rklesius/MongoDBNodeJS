const express = require('express')
const Mongoose = require('mongoose');
const Movie = require('./models/movie')

//Our express app for serving
const app = express();

const dbConnection = "mongodb+srv://rachel:rachel1234@moviedb.jgvmi.mongodb.net/MovieDB?retryWrites=true&w=majority"

Mongoose.connect(dbConnection)
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

//i.e http://localhost:8080/find?title=Alien
app.get('/find', (req, res) => {
    const movieTitle = req.query.title;
    console.log(movieTitle);
    Movie.find({ title: movieTitle})
        .then((results) => {
            res.send(results);
        })
        .catch((err) => {
            console.log(err)
        })
})

//i.e. http://localhost:8080/new-movie?title=The+Terminator&director=James+Cameron&year=1984
app.get('/new-movie', (req,res) => {
    const movieTitle = req.query.title;
    const movieDirector = req.query.director;
    const movieYear = req.query.year;
    // console.log(movieTitle);
    // console.log(movieDirector);
    // console.log(movieYear);
    const movie = new Movie({
        title: movieTitle,
        director: movieDirector,
        yearReleased: movieYear
    });
    movie.save()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err);
    });
})