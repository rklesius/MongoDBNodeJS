// var http = require('http');
//  http.createServer(function (req, res) {
//    res.writeHead(200, {'Content-Type': 'text/html'});
//    res.end('Hello World!');
//  }).listen(8080);

var MongoClient = require('mongodb').MongoClient;
const dbConnection = "mongodb+srv://rklesius:rachel1234@grades-center.5jxgj.mongodb.net/uf-grades?retryWrites=true&w=majority"

MongoClient.connect(dbConnection, { useNewUrlParser: true, useUnifiedTopology: true}, function(err, db){
    if (err) throw err;
    console.log("Connected to Database!");
    db.close();
})