const Mongoose = require('mongoose');

const dbConnection = "mongodb+srv://rachel:rachel1234@moviedb.jgvmi.mongodb.net/MovieDB?retryWrites=true&w=majority"

Mongoose.connect(dbConnection, function(err, db){
    if (err) throw err;
    console.log("Connected to Database!");
    db.close();
})