const express = require('express')
const Mongoose = require('mongoose');

//Our express app for serving
const app = express();

const dbConnection = "mongodb+srv://rklesius:rachel1234@grades-center.5jxgj.mongodb.net/uf-grades?retryWrites=true&w=majority"

Mongoose.connect(dbConnection, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(8080))
    .catch((err) => console.log(err));