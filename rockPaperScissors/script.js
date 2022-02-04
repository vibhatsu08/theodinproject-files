function getRandomChoice () {
    let randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber);
    switch (randomNumber) {
        case 0:
            return "rock";

        case 1: 
            return "paper";

        case 2:
            return "scissors";
    }
}

function roundPlayed (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "tie";
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors")
    && (playerSelection === "paper" && computerSelection === "rock")
    && (playerSelection === "scissors" && computerSelection === "paper")) {
        return "player won";
    }
    else if (computerSelection === "rock" && computerSelection === "scissors"
    && (computerSelection === "paper" && computerSelection === "rock")
    && (computerSelection === "scissors" && computerSelection === "paper")) {
        return "computer won";
    }
}

const computerSelection = getRandomChoice();
roundPlayed(playerSelection, computerSelection);
