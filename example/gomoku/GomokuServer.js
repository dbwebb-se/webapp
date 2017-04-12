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
 * Returns game with given id
 *
 * @param String gameID, alphanumeric string that is used as gameID
 *
 * @return gameboard object if game exists
 *
 */
function getBoard(gameID, res) {
    if (games.hasOwnProperty(gameID)) {
        return games[gameID].board;
    } else {
        sendJSONResponse(res, {
            "message": "No game with Game ID: " + gameID
        });
        return false;
    }
}



/**
 * Creates game with one player, waiting for another player
 *
 * @param String player name
 *
 * @return String unique id
 */
function createGame(name) {
    var uniqueGameID = getUniqueGameID();
    var newBoard = Object.create(GomokuBoard);
    games[uniqueGameID] = {
        board : newBoard,
        timestamp : Date.now(),
        name : name,
        started : false
    };

    games[uniqueGameID].board.player1 = name;
    return uniqueGameID;
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
router.get("/start/:size/:name", (req, res) => {

    // get the value of the parameter :size
    var size = req.params.size;
    var name = req.params.name;

    // Init the Gomoku board
    var message = "The board is initialized.";
    var currentBoard;
    var uniqueGameID;
    try {
        uniqueGameID = createGame(name);
        currentBoard = getBoard(uniqueGameID, res);
        currentBoard.clear();
        currentBoard.start(size);
    } catch (e) {
        message = e.message;
    }

    // Send the response
    sendJSONResponse(res, {
        "message": message,
        "boardSize": currentBoard.getSize(),
        "nextPlayer": currentBoard.playerInTurn(),
        "nextPlayerMarker": currentBoard.playerInTurnMarker(),
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

    var currentBoard = getBoard(gameID, res);
    if (currentBoard) {
        sendJSONResponse(res, {
            "boardSize": currentBoard.getSize(),
            "nextPlayer": currentBoard.playerInTurn(),
            "nextPlayerMarker": currentBoard.playerInTurnMarker(),
            "boardAscii": currentBoard.asAscii()
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

    var currentBoard = getBoard(gameID, res);
    if (currentBoard) {
        sendJSONResponse(res, {
            "boardSize": currentBoard.getSize(),
            "nextPlayer": currentBoard.playerInTurn(),
            "nextPlayerMarker": currentBoard.playerInTurnMarker(),
            "board": currentBoard.board
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

    var currentBoard = getBoard(gameID, res);
    if (currentBoard) {
        res.writeHead(200, "Content-Type: text/plain");
        res.write(currentBoard.asAscii() +
            "\nPlayer in turn is '" +
            currentBoard.playerInTurn() +
            "' playing the marker " +
            currentBoard.playerInTurnMarker() +
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
    var currentBoard = getBoard(gameID, res);
    if (currentBoard) {
        // Place the marker
        var message = "Ok.";
        var winningMessage = "No winner.";
        var winner = "None";
        try {
            currentBoard.place(x, y);
            if (currentBoard.isWinningMove(x, y)) {
                winner = currentBoard.playerInTurn();
                winningMessage = winner + " playing with " + currentBoard.playerInTurnMarker() + " won.";

                delete games[gameID];
            } else {
                currentBoard.nextPlayer();
            }
        } catch (e) {
            message = e.message;
        }

        sendJSONResponse(res, {
            "action": "Trying to place " + x + ", " + y,
            "message": message,
            "boardSize": currentBoard.getSize(),
            "nextPlayer": currentBoard.playerInTurn(),
            "nextPlayerMarker": currentBoard.playerInTurnMarker(),
            "boardIsFull": currentBoard.isFull(),
            "winner" : winner,
            "winningMessage" : winningMessage
        });
    }
});



/**
 * Returns all games with only one player
 *
 * @param Object req The request
 * @param Object res The response
 */
router.get("/games", (req, res) => {
    sendJSONResponse(res, {
        "games": Object.keys(games)
        .map(function (id) { return { name : games[id].name, id : id }; })
        .filter(function (game) { return games[game.id].started === false; })
    });
});



/**
 * Returns all games with only one player
 *
 * @param Object req The request
 * @param Object res The response
 */
router.get("/start_game/:gameid", (req, res) => {
    var gameID = req.params.gameid;

    var currentBoard = getBoard(gameID, res);
    if (currentBoard) {
        games[gameID].started = true;
        sendJSONResponse(res, {
            "boardSize": currentBoard.getSize(),
            "nextPlayer": currentBoard.playerInTurn(),
            "nextPlayerMarker": currentBoard.playerInTurnMarker()
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
