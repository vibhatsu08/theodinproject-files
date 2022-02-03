function computerPlay () {
    const computerMoves = ["rock", "paper", "scissors"];
    let length = computerMoves.length;

    //randomly return rock, paper or scissors.
    let moveNumber = Math.random(); //takes a random number
    let startNumber = 0; //minimum number 
    let endNumber = length; //maximum number equal to the length of the array of moves possible, means less than 3, so 1, 2, 3 are the only numbers it can print.
    let movePlayedNumber = Math.floor(moveNumber * (startNumber - endNumber) + endNumber); //number of the move played, address of the element in the array.
    let computerSelection = computerMoves[movePlayedNumber] //prints the move based on the address of the element.
    console.log(computerSelection); //prints the move played in string format.
}

function userPlay () {
    console.log("rock paper or scissors?");
    let userMove = "rock";
}

function roundPlayed (playerSelection, computerSelection) {
    //user's move
    playerSelection = userPlay();
    //computer's move
    computerSelection = computerPlay();


    if (computerSelection == "rock" && (userSelection == "paper" || userSelection == "scissors")) {
        console.log("user wins");
    }
    else if (computerSelection == "paper" && (userSelection == "scissors" || userSelection == "rock")) {
        console.log("computer wins");
    }
    else if (computerSelection == userSelection) {
        console.log("tie");
    }
}

console.log(roundPlayed(userPlay(), computerPlay()));