function computerPlay () {
    let number = Math.floor(Math.random() * 3);

    switch (number) {
        case 0:
            return "rock";
            break;
    
        case 1:
            return "paper";
            break;

        case 2: 
            return "scissors";
            break;

        default:
            break;
    }
}

function playRound (playerSelection, computerSelection) {
    playerSelection = window.prompt("rock, paper or scissors?");

    if (playerSelection === computerSelection) {
        return "tie";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"
    || (playerSelection === "paper" && computerSelection === "rock")
    || (playerSelection === "scissors" && computerSelection === "paper")) {
        return "you win";
    }
    else if (computerSelection === "rock" && playerSelection === "scissors"
    || (computerSelection === "paper" && playerSelection === "rock")
    || (computerSelection === "scissors" && playerSelection === "paper")) {
        return "computer wins";
    }
}

const rock_button = document.querySelector('#rock');
rock_button.addEventListener (
    'click', playRound(computerSelection = window.prompt("rock, paper or scissors?"))
)