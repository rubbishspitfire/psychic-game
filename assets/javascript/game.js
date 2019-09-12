var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"];



var wins = 0;
var losses = 0;
var left =10;
var guessesSoFar = [];
var psychicLetter = alphabet[Math.floor(Math.random() * alphabet.length)];


var soFar = function() {
    document.getElementById("guesses").innerHTML = "What you've guessed" + guessesSoFar.join(",");  
};

var guessesLeft = function() {
    document.getElementById("left").innerHTML = "Guesses you have left" + left;
};

var newGame = function () {
    guessesSoFar = [];
    wins = 0;
    losses = 0;
    left = 10;
    guessesLeft();
    soFar();
    document.getElementById("wins").innerHTML = "Wins" + wins;
    document.getElementById("losses").innerHTML ="Losses" + losses;
}

document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();
    left--;
    if (guessesSoFar.includes(userGuess)) {
        alert("Hey you already guessed" + userGuess);
    }
  // I want to change the alert to where the user guesses the same letter twice nothing happens. Right now after the alert 
  // the letter gets added to the array twice
    guessesSoFar.push(userGuess);
    soFar();
    guessesLeft();
    if (left > 0) {


        if(userGuess === psychicLetter) {
            wins++;
            document.getElementById("wins").innerHTML = "Wins" + wins;
        } else {
            losses++;
            document.getElementById("losses").innerHTML = "Losses" + losses;
        }

        

    } else {
        console.log("Game Over!");
        newGame();

       }
    };