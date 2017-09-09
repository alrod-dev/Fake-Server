/**
 * Alfredo Rodriguez
 * Date:
 */

var http = require("http");

var PORT = 7500;

function requestHandler(request, response) {

    response.end("You Da Worst My Friend!!!" + request.url);

}

var server = http.createServer(requestHandler);

server.listen(PORT, function () {

    console.log("The Server is listening on localhost: %d", PORT);

});

