/**
 * Alfredo Rodriguez
 * Date:
 */

var http = require("http");

var PORT = 1230;

function requestHandler(request, response) {

    response.end("It Works!!!" + request.url);

}

var server = http.createServer(requestHandler);

server.listen(PORT, function () {

    console.log("The Server is listening on localhost: %d", PORT);

});

