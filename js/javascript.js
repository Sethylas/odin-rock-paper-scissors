let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerSelection = Math.floor(Math.random() * (4 - 1) + 1);
    return computerSelection;
}

function getHumanChoice() {
    let humanSelection = prompt("Please enter ROCK, PAPER or SCISSORS", "");
    humanSelection = humanSelection.toUpperCase();

    switch (humanSelection) 
    {
        case 'ROCK':
            humanSelection = 1;
            break;
        case 'PAPER':
            humanSelection = 2;
            break;
        case 'SCISSORS':
            humanSelection = 3;
            break;
        default:
            humanSelection = 0;
            break;
    }
    return humanSelection;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("Tie!");
    }

    // PLAYER WIN
    else if (humanChoice == 1 && computerChoice == 3) {
        console.log("You win! Rock beats scissors.");
        humanScore++;
    }
    else if (humanChoice == 2 && computerChoice == 1) {
        console.log("You win! Paper beats rock.");
        humanScore++;
    }
    else if (humanChoice == 3 && computerChoice == 2) {
        console.log("You win! Scissors beats paper");
        humanScore++;
    }

    // COMPUTER WIN
    else if (computerChoice == 1 && humanChoice == 3) {
        console.log("You Lose! Rock beats scissors.");
        computerScore++;
    }
    else if (computerChoice == 2 && humanChoice == 1) {
        console.log("You Lose! Paper beats rock.");
        computerScore++;
    }
    else if (computerChoice == 3 && humanChoice == 2) {
        console.log("You Lose! Scissors beats paper");
        computerScore++;
    }
    else {
        return;
    }
}

function playGame() {
    while(humanScore != 5 && computerScore != 5) 
    {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if (humanScore == 5) {
        console.log("Congratulations, you win!");
    }
    else {
        console.log("You lost!");
    }

}

playGame();
