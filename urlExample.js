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

    var urlParts = url.parse(request.url);

    switch (urlParts.pathname)
    {
        case "/":
            response.end("/ You're in trouble");
            break;

        case "/portfolio":
            response.end("This is my portfolio");
            break;

        case "/edit":
            response.end("Display Edit");
            break;

        case "/fun":
            response.end("You just won a new CAR!!!");
            break;

        default:
            displayRoot(urlParts.pathname, request, response);
    }

}

//Create a server that functions with requestHandler as the main function
var server = http.createServer(requestHandler);

//Directs the server to listen for http requests on PORT(1230)
//Also print to the node console what port we are listening on

server.listen(PORT, function () {

    console.log("The Server is listening on localhost: %d", PORT);

});

