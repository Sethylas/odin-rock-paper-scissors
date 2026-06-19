let humanScore = 0;
    computerScore = 0;
    humanChoice = 0;
    computerChoice = 0;


function getRandomNumber() {
    return Math.floor(Math.random() * (4 - 1) + 1);
}

function getComputerChoice() {
    computerChoice = getRandomNumber();
    return computerChoice;
}

function getHumanChoice() {
    humanChoice = prompt("Please enter ROCK, PAPER or SCISSORS", "");
    humanChoice = humanChoice.toUpperCase();
    return humanChoice;
}


console.log(getHumanChoice());
    
