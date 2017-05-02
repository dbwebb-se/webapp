Gomoku Server API reference
==================================


Response type
----------------------------------

The response type is json, with exception for / and /view/ascii.



GET /
----------------------------------

Plain text response. Shows welcome message and available routes.

*Response.*
```
Welcome the GomokuBoard server. This is the API of what can be done.
/             Display this helptext.
/start/:size  Start a new game with a board of :size.
/view         View details on the game.
/view/ascii   View the gameboard and whos next in turn.
/view/json    Get the gameboard in raw json and whos next in turn.
/place/:x/:y  Place a marker at choosen place. Returns if there is player that has 5 in a row and has won the game.
```


GET /start/:size
----------------------------------

Start a new game with a board of :size.

*Example call*

```
/start/20
```



### Parameters

| Name   | Required | Example value | Description |
|:------:|:--------:|:-------------:|:------------|
| size   | yes      | 20            | The size of the board |

*JSON response.*

```json
{
    "message": "The board is initialized.",
    "boardSize": "20",
    "nextPlayer": "Player 1",
    "nextPlayerMarker": "X"
}
```



GET /view
----------------------------------

View details on the game.

*Example call*

```
/view
```



*JSON response*

```json
{
    "boardSize": "20",
    "nextPlayer": "Player 1",
    "nextPlayerMarker": "X",
    "boardAscii": "   0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 \n 0|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|\n 1|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|\n 2|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|\n 3|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|\n 4|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|\n 5|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|\n 6|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|\n 7|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|\n 8|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|\n 9|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|\n10|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|\n11|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|\n12|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|\n13|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|\n14|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|\n15|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|\n16|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|\n17|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|\n18|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|\n19|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|\n"
}
```



GET /view/ascii
----------------------------------

View the gameboard and whos next in turn.

*Example call*

```
/view/ascii
```



*Response*
```
0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9
0|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|
1|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|
2|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|
3|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|
4|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|
5|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|
6|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|
7|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|
8|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|
9|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|
10|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|
11|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|
12|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|
13|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|
14|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|
15|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|
16|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|
17|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|
18|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|
19|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|

Player in turn is 'Player 1' playing the marker X.
```


GET /view/json
----------------------------------

Get the gameboard in raw json and whos next in turn.

*Example call*

```
/view/json
```



*JSON response*

```json
{
    "boardSize": "20",
    "nextPlayer": "Player 1",
    "nextPlayerMarker": "X",
    "board": [
        0,
        0,
        0,
        0,
        0,
        0,
        ... // Abbreviated for clarity
    ]
}
```



GET /place/:x/:y
----------------------------------

Place a marker at choosen place. Returns if there is player that has 5 in a row and has won the game.

*Example call*

```
/place/:x/:y
```



### Parameters

| Name      | Required | Example value | Description |
|:---------:|:--------:|:-------------:|:------------|
| x         | yes      | 9             | The x-value of the marker to place, 0-indexed. |
| y         | yes      | 9             | The y-value of the marker to place, 0-indexed. |



*JSON response.*

```json
{
    "action": "Trying to place 9, 9",
    "message": "Ok.",
    "boardSize": "20",
    "nextPlayer": "Player 2",
    "nextPlayerMarker": "O",
    "boardIsFull": false,
    "winner": "None",
    "winningMessage": "No winner."
}
```



Revision history
------------------------------
2017-04-22 (efo) Created api document, documented routes and responses.
