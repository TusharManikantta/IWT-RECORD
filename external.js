External.js
function myfunction() {
    var num = parseInt(Math.random() * 10 + 1);
    var userGuess = prompt("input a guess number between 1 to 10");
    if (isNaN(userGuess)) {
        alert("Please, write a number");
    } else {
        if (num == userGuess) {
            alert("Wow you guessed it :D");
        } else {
            alert("Not matched. Number was " + num);
        }
    }
}