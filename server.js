var express = require('express');
var cors = require('cors');

var app = express();
var Client = require('node-rest-client').Client;

// app.use(cors);

var client = new Client();
 
app.get('/', function (req, res) {
    // direct way 
  client.get("https://jsonplaceholder.typicode.com/albums", function (data, response) {
    // parsed response body as js object 
    console.log(data);
    // raw response 
    console.log(response);

    res.json(data);
});
});


app.get('/test', function (req, res) {
  client.registerMethod("jsonMethod", "https://jsonplaceholder.typicode.com/posts", "GET");
 
client.methods.jsonMethod(function (data, response) {
    // parsed response body as js object 
    console.log(data);
    // raw response 
    console.log(response);

        res.json(data);
});
});

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)

})