/**
 * Front for GomokuServer
 */
"use strict";

// The main class for the Gomoku game
var GomokuBoard = require("./GomokuBoard");
var gameBoard = Object.create(GomokuBoard);

gameBoard.clear();


// A better router to create a handler for all routes
var Router = require("./router/router");
var router = new Router();



// Import the http server as base
var http = require("http");
var url = require("url");



/**
 * Wrapper function for sending a JSON response
 *
 * @param  Object        res     The response
 * @param  Object/String content What should be written to the response
 * @param  Integer       code    HTTP status code
 */
function sendJSONResponse(res, content, code) {
    code = (typeof code !== 'undefined') ?  code : 200;
    res.writeHead(code, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    });
    res.write(JSON.stringify(content, null, "    "));
    res.end();
}



/**
 * Display a helptext about the API.
 *
 * @param Object req The request
 * @param Object res The response
 */
router.get("/", (req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/plain",
        "Access-Control-Allow-Origin": "*",
    });
    res.write("Welcome the GomokuBoard server. This is the API of what can be done.\n\n" +
        " /             Display this helptext.\n" +
        " /start/:size  Start a new game with a board of :size.\n" +
        " /view         View details on the game.\n" +
        " /view/ascii   View the gameboard and whos next in turn.\n" +
        " /view/json    Get the gameboard in raw json and whos next in turn.\n" +
        " /place/:x/:y  Place a marker at choosen place." +
        " Returns if there is player that has 5 in a row.\n"
    );
    res.end();
});



/**
 * Initialize the game
 *
 * @param Object req The request
 * @param Object res The response
 */
router.get("/start/:size", (req, res) => {
    // get the value of the parameter :size
    var size = req.params.size;

    // Init the Gomoku board
    var message = "The board is initialized.";

    try {
        gameBoard.start(size);
    } catch (e) {
        message = e.message;
    }

    // Send the response
    sendJSONResponse(res, {
        "message": message,
        "boardSize": gameBoard.getSize(),
        "nextPlayer": gameBoard.playerInTurn(),
        "nextPlayerMarker": gameBoard.playerInTurnMarker()
    });
});



/**
 * View the gameboard
 *
 * @param Object req The request
 * @param Object res The response
 */
router.get("/view", (req, res) => {
    sendJSONResponse(res, {
        "boardSize": gameBoard.getSize(),
        "nextPlayer": gameBoard.playerInTurn(),
        "nextPlayerMarker": gameBoard.playerInTurnMarker(),
        "boardAscii": gameBoard.asAscii()
    });
});



/**
 * View the raw gameboard
 *
 * @param Object req The request
 * @param Object res The response
 */
router.get("/view/json", (req, res) => {
    sendJSONResponse(res, {
        "boardSize": gameBoard.getSize(),
        "nextPlayer": gameBoard.playerInTurn(),
        "nextPlayerMarker": gameBoard.playerInTurnMarker(),
        "board": gameBoard.board
    });
});



/**
 * View the gameboard as ascii.
 *
 * @param Object req The request
 * @param Object res The response
 */
router.get("/view/ascii", (req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/plain",
        "Access-Control-Allow-Origin": req.headers.origin,
    });
    res.write(gameBoard.asAscii() +
        "\nPlayer in turn is '" +
        gameBoard.playerInTurn() +
        "' playing the marker " +
        gameBoard.playerInTurnMarker() +
        ".\n");
    res.end();
});



/**
 * View the gameboard
 *
 * @param Object req The request
 * @param Object res The response
 */
router.get("/place/:x/:y", (req, res) => {
    // get the value of the parameter :x and :y
    var x = Number.parseInt(req.params.x);
    var y = Number.parseInt(req.params.y);

    // Place the marker
    var message = "Ok.";
    var winningMessage = "No winner.";
    var winner = "None";

    try {
        gameBoard.place(x, y);
        if (gameBoard.isWinningMove(x, y)) {
            winner = gameBoard.playerInTurn();
            winningMessage = winner + " playing with " + gameBoard.playerInTurnMarker() + " won.";
        } else {
            gameBoard.nextPlayer();
        }
    } catch (e) {
        message = e.message;
    }

    sendJSONResponse(res, {
        "action": "Trying to place " + x + ", " + y,
        "message": message,
        "boardSize": gameBoard.getSize(),
        "nextPlayer": gameBoard.playerInTurn(),
        "nextPlayerMarker": gameBoard.playerInTurnMarker(),
        "boardIsFull": gameBoard.isFull(),
        "winner": winner,
        "winningMessage": winningMessage
    });
});



/**
 * Create and export the server
 */
var server = http.createServer((req, res) => {
    var ipAddress,
        route;

    // Log incoming requests
    ipAddress = req.connection.remoteAddress;

    // Check what route is requested
    route = url.parse(req.url).pathname;
    console.log("Incoming route " + route + " from ip " + ipAddress);

    // Let the router take care of all requests
    router.route(req, res);
});

module.exports = server;
