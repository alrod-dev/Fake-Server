/**
 * Alfredo Rodriguez
 * Date:
 */

//Package will allows us to parse parts of the request url
var url = require("url");

//http require
var http = require("http");

//Port we're going to listen on
var PORT = 7000;

//Function that runs when our localhost:PORT is hit with http traffic
function requestHandler(request, response) {

    response.end("You Da Best!!!" + request.url);

}

//Create a server that functions with requestHandler as the main function
var server = http.createServer(requestHandler);

//Directs the server to listen for http requests on PORT(7000)
//Also print to the node console what port we are listening on

server.listen(PORT, function () {

    console.log("The Server is listening on localhost: %d", PORT);

});

