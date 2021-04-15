function addScore(scoresArray, value) {
    let newScores = scoresArray.slice();

    newScores.push(value);

    return newScores;
}

function rollDices(scores) {
    let diceValues = rollDice() + rollDice();

    return addScore(scores, diceValues);
}

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

let scores = [7, 6, 11, 9, 3];

scores = rollDices(scores);
console.log(scores);
scores = rollDices(scores);
console.log(scores);
scores = rollDices(scores);
console.log(scores);
scores = rollDices(scores);
console.log(scores);
scores = rollDices(scores);
console.log(scores);
