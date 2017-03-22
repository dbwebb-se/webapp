"use strict";
/**
 * Class for Gomoku board.
 *
 */
var GomokuBoard = {
    board : [],
    player1 : "Player 1",
    player2 : "Player 2",
    marker : ["_", "X", "O"],



    /**
     * Clear the board.
     *
     */
    clear : function () {
        this.board = [];
        this.player = 0;
        this.size = null;
    },



    /**
     * Prepare the game by creating an empty board of the specified size.
     *
     * @param  Integer size Inital size on the gameboard.
     *
     * @throws Error size is not within 10-99.
     *
     */
    start : function (size) {
        size = (typeof size !== 'undefined') ?  size : 20;
        this.clear();

        if (size < 10 || size > 99) {
            throw new Error("Unsupported size.");
        }

        this.size = size;
        this.player = 1;
        this.board = [];
        this.board.length = this.size * this.size;
        this.board.fill(0);
    },



    /**
     * Add a move to the board for the player whos next in turn.
     *
     * @param  Integer x Where to place the mark 0-(size-1).
     * @param  Integer y Where to place the mark 0-(size-1).
     *
     * @throws Error if x and y is outside the boards.
     * @throws Error if the position is already taken.
     *
     */
    place : function (x, y) {
        var position = this.getPosition(x, y);

        if (this.isTaken(position)) {
            throw new Error("The position is already taken.");
        }

        this.placeMarker(position);
    },



    /**
     * Get the current size of the board.
     *
     * @return Integer | null
     *
     */
    getSize : function () {
        return this.size;
    },



    /**
     * Check if position is taken.
     *
     * @param  Integer position to check.
     *
     * @return true | false
     *
     */
    isTaken : function (position) {
        return (this.board[position] === 0) ? false : true;
    },



    /**
     * Check if position is taken.
     *
     * @param  Integer x Where to place the mark 0-(size-1).
     * @param  Integer y Where to place the mark 0-(size-1).
     *
     * @throws Error if x and y is outside the boards.
     *
     * @return true | false
     *
     */
    isPositionTaken : function (x, y) {
        return this.isTaken(this.getPosition(x, y));
    },



    /**
     * Check if position is within the board and return its internal position.
     *
     * @param  Integer x Where to check 0-(size-1).
     * @param  Integer y Where to check 0-(size-1).
     *
     * @throws Error if x and y is outside the boards.
     *
     * @return Integer as internal board position.
     */
    getPosition : function (x, y) {
        if (x < 0 || x > this.size || y < 0 || y > this.size) {
            throw new Error("Position is outside of the board.");
        }

        return this.positionHelper(x, y);
    },



    /**
     * Position helper that only calculates the value, so it does not throw error in winningMove.
     *
     * @param  Integer x Where to check 0-(size-1).
     * @param  Integer y Where to check 0-(size-1).
     *
     * @return Integer as internal board position, can be outside board.
     */
    positionHelper :function (x, y) {
        return x + y * this.size;
    },



    /**
     * Check if there is a free place to put a marker or if the board is full.
     *
     * @return true | false
     *
     */
    isFull : function () {
        return this.board.every((currentValue) => {
            return currentValue !== 0;
        });
    },



    /**
     * Place a marker at the internal board position.
     *
     * @param  Integer position to place marker.
     *
     * @return this
     */
    placeMarker : function (position) {
        this.board[position] = this.player;
        return this;
    },



    /**
     * Gets a more readable name of the the current player.
     *
     * @return String
     */
    playerInTurn : function () {
        var player = "No player";

        if (this.player === 1) {
            player = this.player1;
        } else if (this.player === 2) {
            player = this.player2;
        }

        return player;
    },



    /**
     * What is the next players marker?
     *
     * @return String
     */
    playerInTurnMarker : function () {
        return this.marker[this.player];
    },



    /**
     * Swap to next player in turn.
     *
     * @return void
     *
     */
    nextPlayer : function () {
        this.player = (this.player === 1) ? 2 : 1;
    },



    /**
     * Returns the current game board as a printable string.
     *
     * @return String
     */
    asAscii : function () {
        var x, y, value,
            ascii = "";

        ascii += "  ";
        for (x = 0; x < this.size; x++) {
            ascii += " " + x % 10;
        }
        ascii += " \n";

        for (y = 0; y < this.size; y++) {
            if (y < 10) {
                ascii += " ";
            }
            ascii += y;

            for (x = 0; x < this.size; x++) {
                value = this.board[x + y * this.size];
                ascii += "|" + this.marker[value];
            }
            ascii += "|\n";
        }

        return ascii;
    },



    /**
     * Returns if the last move was a winning move.
     *
     * @return Boolean
     */
    isWinningMove : function (x, y) {
        return this.checkDirection(x, y, 1, 1) ||
                this.checkDirection(x, y, 0, 1) ||
                this.checkDirection(x, y, -1, 1) ||
                this.checkDirection(x, y, 1, 0);
    },



    /**
     * Returns if one direction has 5 in a row.
     *
     * @return Boolean
     */
    checkDirection : function (x, y, deltaX, deltaY) {
        var fiveInARow = false;

        var startOffset = 4;
        var startPosition = this.positionHelper(x - startOffset * deltaX, y - startOffset * deltaY);
        while (startPosition < 0) {
            startOffset--;
            startPosition = this.positionHelper(x - startOffset * deltaX, y - startOffset * deltaY);
        }

        for (var i = 0; i <= startOffset; i++) {
            var markers = [];
            for (var j = 0; j < 5; j++) {
                var currentPosition = this.positionHelper(x - (startOffset - i - j) * deltaX, y - (startOffset - i - j) * deltaY);
                if (currentPosition < this.size * this.size) {
                    markers.push(this.board[currentPosition]);
                } else {
                    markers.push(0);
                }
            }

            fiveInARow = markers.every(function (value, index, originalArray) {
                return value === originalArray[0];
            });

            if (fiveInARow) {
                break;
            }
        }

        return fiveInARow;
    }
};

module.exports = GomokuBoard;
