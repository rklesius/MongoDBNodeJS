const express = require('express')
const Mongoose = require('mongoose');

//Our express app for serving
const app = express();

const dbConnection = "mongodb+srv://rachel:rachel1234@moviedb.jgvmi.mongodb.net/MovieDB?retryWrites=true&w=majority"

Mongoose.connect(dbConnection)
    .then((result) => app.listen(8080))
    .catch((err) => console.log(err));