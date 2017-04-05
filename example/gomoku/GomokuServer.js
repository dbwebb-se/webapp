/**
 * Front for GomokuServer
 */
"use strict";

// The main class for the Gomoku game
var GomokuBoard = require("./GomokuBoard");



// A better router to create a handler for all routes
var Router = require("./router/router");
var router = new Router();



// Import the http server as base
var http = require("http");
var url = require("url");



// Setup for multiplayer support
var games = {};



/**
 * Wrapper function for sending a JSON response
 *
 * @param  Object        res     The response
 * @param  Object/String content What should be written to the response
 * @param  Integer       code    HTTP status code
 */
function sendJSONResponse(res, content, code) {
    code = (typeof code !== 'undefined') ?  code : 200;
    res.writeHead(code, "Content-Type: application/json");
    res.write(JSON.stringify(content, null, "    "));
    res.end();
}



/**
 * Returns a unique game id for multiplayer server, 8 character alphanumeric
 *
 * @return string, 8 character alphanumeric
 */
function getUniqueGameID() {
    var id = alphanumericString();
    while (Object.keys(games).indexOf(id) > -1) {
        id = alphanumericString();
    }
    return id;
}



/**
 * Returns alphanumeric string
 *
 * @param Integer len, is the length of the random alphanumeric string
 *
 * @return alphanumeric string of length
 */
function alphanumericString(len) {
    len = (typeof len !== 'undefined') ?  len : 8;
    var alphanum = "";
    var possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789";
    for (var i = 0; i < len; i++) {
        alphanum += possibleCharacters.charAt(Math.floor(Math.random() * (possibleCharacters.length - 1)));
    }
    return alphanum;
}



/**
 * Returns game with given id
 *
 * @param String gameID, alphanumeric string that is used as gameID
 *
 * @return gameboard object if game exists
 *
 */
function getGame(gameID, res) {
    if (games.hasOwnProperty(gameID)) {
        return games[gameID];
    } else {
        sendJSONResponse(res, {
            "message": "No game with Game ID: " + gameID
        });
        return false;
    }
}



/**
 * Display a helptext about the API.
 *
 * @param Object req The request
 * @param Object res The response
 */
router.get("/", (req, res) => {

    res.writeHead(200, "Content-Type: text/plain");
    res.write("Welcome the GomokuBoard server. This is the API of what can be done.\n\n" +
        " /                         Display this helptext.\n" +
        " /start/:size              Start a new game with a board of :size.\n" +
        " /view/:gameid             View details on the game.\n" +
        " /view/ascii/:gameid       View the gameboard and whos next in turn.\n" +
        " /view/json/:gameid        View the gameboard in raw json and whos next in turn.\n" +
        " /place/:x/:y/:gameid      Place a marker at choosen place.\n"
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
        var uniqueGameID = getUniqueGameID();
        games[uniqueGameID] = Object.create(GomokuBoard);

        var currentGame = getGame(uniqueGameID, res);
        currentGame.clear();
        currentGame.start(size);
    } catch (e) {
        message = e.message;
    }

    // Send the response
    sendJSONResponse(res, {
        "message": message,
        "boardSize": currentGame.getSize(),
        "nextPlayer": currentGame.playerInTurn(),
        "nextPlayerMarker": currentGame.playerInTurnMarker(),
        "gameID" : uniqueGameID
    });
});



/**
 * View the gameboard
 *
 * @param Object req The request
 * @param Object res The response
 */
router.get("/view/:gameid", (req, res) => {
    var gameID = req.params.gameid;

    var currentGame = getGame(gameID, res);
    if (currentGame) {
        sendJSONResponse(res, {
            "boardSize": currentGame.getSize(),
            "nextPlayer": currentGame.playerInTurn(),
            "nextPlayerMarker": currentGame.playerInTurnMarker(),
            "boardAscii": currentGame.asAscii()
        });
    }
});



/**
 * View the raw gameboard
 *
 * @param Object req The request
 * @param Object res The response
 */
router.get("/view/json/:gameid", (req, res) => {
    var gameID = req.params.gameid;

    var currentGame = getGame(gameID, res);
    if (currentGame) {
        sendJSONResponse(res, {
            "boardSize": currentGame.getSize(),
            "nextPlayer": currentGame.playerInTurn(),
            "nextPlayerMarker": currentGame.playerInTurnMarker(),
            "board": currentGame.board
        });
    }
});



/**
 * View the gameboard as ascii.
 *
 * @param Object req The request
 * @param Object res The response
 */
router.get("/view/ascii/:gameid", (req, res) => {
    var gameID = req.params.gameid;

    var currentGame = getGame(gameID, res);
    if (currentGame) {
        res.writeHead(200, "Content-Type: text/plain");
        res.write(currentGame.asAscii() +
            "\nPlayer in turn is '" +
            currentGame.playerInTurn() +
            "' playing the marker " +
            currentGame.playerInTurnMarker() +
            ".\n");
        res.end();
    }
});



/**
 * View the gameboard
 *
 * @param Object req The request
 * @param Object res The response
 */
router.get("/place/:x/:y/:gameid", (req, res) => {

    // get the value of the parameter :x and :y
    var x = Number.parseInt(req.params.x);
    var y = Number.parseInt(req.params.y);

    var gameID = req.params.gameid;
    var currentGame = getGame(gameID, res);
    if (currentGame) {
        // Place the marker
        var message = "Ok.";
        var winningMessage = "No winner.";
        var winner = "None";
        try {
            currentGame.place(x, y);
            if (currentGame.isWinningMove(x, y)) {
                winner = currentGame.playerInTurn();
                winningMessage = winner + " playing with " + currentGame.playerInTurnMarker() + " won.";

                delete games[gameID];
            } else {
                currentGame.nextPlayer();
            }
        } catch (e) {
            message = e.message;
        }

        sendJSONResponse(res, {
            "action": "Trying to place " + x + ", " + y,
            "message": message,
            "boardSize": currentGame.getSize(),
            "nextPlayer": currentGame.playerInTurn(),
            "nextPlayerMarker": currentGame.playerInTurnMarker(),
            "boardIsFull": currentGame.isFull(),
            "winner" : winner,
            "winningMessage" : winningMessage
        });
    }
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
